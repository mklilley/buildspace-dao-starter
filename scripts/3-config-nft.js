import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2A4B55fde7e2a093ebc1dc0A72cE33fbdD164d5A"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Fish and Chips",
        description: "This NFT will give you access to UKDAO!",
        image: readFileSync("scripts/assets/FishandChips.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
