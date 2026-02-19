interface SignatureOptions {
  segwitType?: 'p2wpkh' | 'p2sh(p2wpkh)';
  extraEntropy?: Uint8Array;
}

type RecoveryIdType = 0 | 1 | 2 | 3;
interface RecoverableSignature {
  signature: Uint8Array;
  recoveryId: RecoveryIdType;
}

export interface Signer {
  // param hash: 32 byte Uint8Array containing the digest of the message
  // param extraEntropy (optional): the 32 byte Uint8Array of the "extra data" part of RFC6979 nonces
  // returns object
  //   attribute signature: 64 byte Uint8Array, first 32 R value, last 32 S value of ECDSA signature
  //   attribute recoveryId: Number (integer) from 0 to 3 (inclusive), also known as recid, used for pubkey recovery
  signRecoverable(
    hash: Uint8Array,
    extraEntropy?: Uint8Array,
  ): RecoverableSignature;
}

export interface SignerAsync {
  // Same as Signer, but return is wrapped in a Promise
  signRecoverable(
    hash: Uint8Array,
    extraEntropy?: Uint8Array,
  ): Promise<RecoverableSignature>;
}

interface TinySecp256k1Interface {
  signRecoverable(
    h: Uint8Array,
    d: Uint8Array,
    e?: Uint8Array,
  ): RecoverableSignature;
  recover(
    h: Uint8Array,
    signature: Uint8Array,
    recoveryId: RecoveryIdType,
    compressed?: boolean,
  ): Uint8Array | null;
}

export interface MessageAPI {
  magicHash(
    message: string | Uint8Array,
    messagePrefix?: string | Uint8Array,
  ): Uint8Array;

  // sign function is overloaded
  sign(
    message: string | Uint8Array,
    privateKey: Uint8Array | Signer,
    compressed?: boolean,
    sigOptions?: SignatureOptions,
  ): Uint8Array;
  sign(
    message: string | Uint8Array,
    privateKey: Uint8Array | Signer,
    compressed?: boolean,
    messagePrefix?: string | Uint8Array,
    sigOptions?: SignatureOptions,
  ): Uint8Array;

  // signAsync function is overloaded
  signAsync(
    message: string | Uint8Array,
    privateKey: Uint8Array | SignerAsync | Signer,
    compressed?: boolean,
    sigOptions?: SignatureOptions,
  ): Promise<Uint8Array>;
  signAsync(
    message: string | Uint8Array,
    privateKey: Uint8Array | SignerAsync | Signer,
    compressed?: boolean,
    messagePrefix?: string | Uint8Array,
    sigOptions?: SignatureOptions,
  ): Promise<Uint8Array>;

  verify(
    message: string | Uint8Array,
    address: string,
    signature: string | Uint8Array,
    messagePrefix?: string | Uint8Array,
    checkSegwitAlways?: boolean,
  ): boolean;
}
export declare function MessageFactory(ecc: TinySecp256k1Interface): MessageAPI;
