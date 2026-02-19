# 4.0.0

**breaking**

- Migrated to a Uint8Array-first API. Buffer-only inputs/outputs are no longer part of the public contract.
- Upgraded the bitcoinjs stack to v7-era dependencies (`bitcoinjs-lib` 7.x, `ecpair` 3.x, `varuint-bitcoin` 2.x, `bech32` 2.x, `bs58check` 4.x).
- Raised minimum supported Node.js version to 20.
  **added**
- Added `uint8array-tools` usage for UTF-8/base64/hex conversions, concatenation, and byte-array comparisons.

# 3.0.0

**breaking**

- Refactored the message signing and verification API to use a more modular approach, introducing `MessageFactory` to accommodate different ecc backends.
  **added**
- Revised the examples in `README.md` to reflect the updated API and dependency changes, ensuring users have the latest information on library usage.
- Introduced compatibility with the `tiny-secp256k1` library.
- Added `MessageFactory` function to allow for flexible cryptographic function injection, enhancing the library's adaptability to different environments and use cases.
- Expanded the test suite to cover new functionality.
  **removed**
- Removed deprecated dependencies and code paths that relied on older versions of cryptographic libraries.

# 2.2.0

**added**

- Signer and SignerAsync interfaces
- sign functions can accept Signer | SignerAsync interfaces in place of privateKey
- Added an async signAsync function (needed if you use SignerAsync interface) that returns a promise.

# 2.1.4

**fixed**

- Fixed TypeScript types

# 2.1.3

**added**

- TypeScript types

# 2.1.2

**added**

- Support for Segwit signatures compatible with Electrum. (See README)

# 2.1.1

**fixed**

- Fix UTF8 handling of message.

# 2.1.0

**added**

- Segwit support for P2WPKH and P2SH-P2WPKH addresses. This is based on Trezor implementation.

# 2.0.0

**breaking**

- `messagePrefix` is now the last parameter for the `sign`, `verify` and `magicHash` functions
- `messagePrefix` is now defaulted to the Bitcoin network message prefix
