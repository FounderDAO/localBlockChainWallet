/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../goan/params";
import { CustomTx } from "../goan/custom_tx";

export const protobufPackage = "goan.goan";

/** GenesisState defines the goan module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  customTxList: CustomTx[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  customTxCount: number;
}

const baseGenesisState: object = { customTxCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.customTxList) {
      CustomTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.customTxCount !== 0) {
      writer.uint32(24).uint64(message.customTxCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.customTxList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.customTxList.push(CustomTx.decode(reader, reader.uint32()));
          break;
        case 3:
          message.customTxCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.customTxList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.customTxList !== undefined && object.customTxList !== null) {
      for (const e of object.customTxList) {
        message.customTxList.push(CustomTx.fromJSON(e));
      }
    }
    if (object.customTxCount !== undefined && object.customTxCount !== null) {
      message.customTxCount = Number(object.customTxCount);
    } else {
      message.customTxCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.customTxList) {
      obj.customTxList = message.customTxList.map((e) =>
        e ? CustomTx.toJSON(e) : undefined
      );
    } else {
      obj.customTxList = [];
    }
    message.customTxCount !== undefined &&
      (obj.customTxCount = message.customTxCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.customTxList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.customTxList !== undefined && object.customTxList !== null) {
      for (const e of object.customTxList) {
        message.customTxList.push(CustomTx.fromPartial(e));
      }
    }
    if (object.customTxCount !== undefined && object.customTxCount !== null) {
      message.customTxCount = object.customTxCount;
    } else {
      message.customTxCount = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
