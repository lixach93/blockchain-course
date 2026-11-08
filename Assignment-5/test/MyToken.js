import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("MyToken", function () {
    let token;
    let owner;
    let addr1;
    let addr2;

    const initialSupply = ethers.parseEther("1000000");

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        const MyToken = await ethers.getContractFactory("MyToken");
        token = await MyToken.deploy(initialSupply);

        await token.waitForDeployment();
    });

    it("Should set the correct token name and symbol", async function () {
        expect(await token.name()).to.equal("MyToken");
        expect(await token.symbol()).to.equal("MTK");
    });

    it("Should assign the initial supply to the owner", async function () {
        expect(await token.balanceOf(owner.address)).to.equal(initialSupply);
    });

    it("Should mint new tokens to an address", async function () {
        const amount = ethers.parseEther("100");

        await token.mint(addr1.address, amount);

        expect(await token.balanceOf(addr1.address)).to.equal(amount);
    });

    it("Should allow token transfers", async function () {
        const amount = ethers.parseEther("100");

        await token.transfer(addr1.address, amount);

        expect(await token.balanceOf(addr1.address)).to.equal(amount);
        expect(await token.balanceOf(owner.address))
            .to.equal(initialSupply - amount);
    });

    it("Should allow a recipient to transfer received tokens", async function () {
        const amount = ethers.parseEther("100");

        await token.transfer(addr1.address, amount);
        await token.connect(addr1).transfer(addr2.address, amount);

        expect(await token.balanceOf(addr1.address)).to.equal(0n);
        expect(await token.balanceOf(addr2.address)).to.equal(amount);
    });

    it("Should reject minting by a non-owner", async function () {
        const amount = ethers.parseEther("100");

        await expect(
            token.connect(addr1).mint(addr2.address, amount)
        ).to.be.revert(ethers);
    });

    it("Should reject transfers exceeding the available balance", async function () {
        const amount = initialSupply + 1n;

        await expect(
            token.transfer(addr1.address, amount)
        ).to.be.revert(ethers);
    });
});