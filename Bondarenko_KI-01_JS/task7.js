const assert = require("assert");
const test = require("./testFunction");

function int32ToIp(int32) {
  const octet1 = int32 >>> 24;
  const octet2 = (int32 >> 16) & 255;
  const octet3 = (int32 >> 8) & 255;
  const octet4 = int32 & 255;
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}

test(2149583361, "128.32.10.1", assert.strictEqual, int32ToIp);
test(32, "0.0.0.32", assert.strictEqual, int32ToIp);
test(0, "0.0.0.0", assert.strictEqual, int32ToIp);
