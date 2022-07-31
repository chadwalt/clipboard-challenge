const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns provided partition key when length is less than 255", () => {
    const event = {
      partitionKey: "hex33",
    };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });

  it("Returns hashed event when partition key is not provided", () => {
    const event = {
      hash: "hex33",
    };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(
      "a8789f4debea6fd9fadd94d1ad461f9836bf970cbfdaa13bd79f6d76d7f95e697126ecdbb2d7039d67639829201c4738a439ac530c47d078765db6e86c7166dc"
    );
  });

  it("Returns partition key as string when a number is provided", () => {
    const event = {
      partitionKey: 33,
    };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("33");
  });

  it("Returns hashed partition key when provided length is greater then 256", () => {
    const event = {
      partitionKey:
        "a8789f4debea6fd9fadd94d1ad461f9836bf970cbfdaa13bd79f6d76d7f95e697126ecdbb2d7039d67639829201c4738a439ac530c47d078765db6e86c7166dca8789f4debea6fd9fadd94d1ad461f9836bf970cbfdaa13bd79f6d76d7f95e697126ecdbb2d7039d67639829201c4738a439ac530c47d078765db6e86c7166dc2",
    };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(
      "f05925018417cac3122cd47501aa20fd9626d5faafda33df862beabe973a633b61190ac623fbac3f5a090186049f369ddf53c9e93238daa1adede3c482ab70d4"
    );
  });
});
