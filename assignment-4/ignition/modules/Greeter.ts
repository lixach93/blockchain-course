
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("GreeterModule", (m) => {
  const greeter = m.contract("Greeter", ["Alex"]);

  return { greeter };
});
