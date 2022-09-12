/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "goan.goan";

export interface MsgOddiyTx {
  creator: string;
  sender: string;
  receiver: string;
  amount: string;
  fee: string;
  feeReceiver: string;
  txType: string;
  serviceName: string;
}

export interface MsgOddiyTxResponse {}

const baseMsgOddiyTx: object = {
  creator: "",
  sender: "",
  receiver: "",
  amount: "",
  fee: "",
  feeReceiver: "",
  txType: "",
  serviceName: "",
};

export const MsgOddiyTx = {
  encode(message: MsgOddiyTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(42).string(message.fee);
    }
    if (message.feeReceiver !== "") {
      writer.uint32(50).string(message.feeReceiver);
    }
    if (message.txType !== "") {
      writer.uint32(58).string(message.txType);
    }
    if (message.serviceName !== "") {
      writer.uint32(66).string(message.serviceName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOddiyTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgOddiyTx } as MsgOddiyTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.fee = reader.string();
          break;
        case 6:
          message.feeReceiver = reader.string();
          break;
        case 7:
          message.txType = reader.string();
          break;
        case 8:
          message.serviceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOddiyTx {
    const message = { ...baseMsgOddiyTx } as MsgOddiyTx;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    if (object.feeReceiver !== undefined && object.feeReceiver !== null) {
      message.feeReceiver = String(object.feeReceiver);
    } else {
      message.feeReceiver = "";
    }
    if (object.txType !== undefined && object.txType !== null) {
      message.txType = String(object.txType);
    } else {
      message.txType = "";
    }
    if (object.serviceName !== undefined && object.serviceName !== null) {
      message.serviceName = String(object.serviceName);
    } else {
      message.serviceName = "";
    }
    return message;
  },

  toJSON(message: MsgOddiyTx): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    message.feeReceiver !== undefined &&
      (obj.feeReceiver = message.feeReceiver);
    message.txType !== undefined && (obj.txType = message.txType);
    message.serviceName !== undefined &&
      (obj.serviceName = message.serviceName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgOddiyTx>): MsgOddiyTx {
    const message = { ...baseMsgOddiyTx } as MsgOddiyTx;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
    if (object.feeReceiver !== undefined && object.feeReceiver !== null) {
      message.feeReceiver = object.feeReceiver;
    } else {
      message.feeReceiver = "";
    }
    if (object.txType !== undefined && object.txType !== null) {
      message.txType = object.txType;
    } else {
      message.txType = "";
    }
    if (object.serviceName !== undefined && object.serviceName !== null) {
      message.serviceName = object.serviceName;
    } else {
      message.serviceName = "";
    }
    return message;
  },
};

const baseMsgOddiyTxResponse: object = {};

export const MsgOddiyTxResponse = {
  encode(_: MsgOddiyTxResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOddiyTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgOddiyTxResponse } as MsgOddiyTxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgOddiyTxResponse {
    const message = { ...baseMsgOddiyTxResponse } as MsgOddiyTxResponse;
    return message;
  },

  toJSON(_: MsgOddiyTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgOddiyTxResponse>): MsgOddiyTxResponse {
    const message = { ...baseMsgOddiyTxResponse } as MsgOddiyTxResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  OddiyTx(request: MsgOddiyTx): Promise<MsgOddiyTxResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  OddiyTx(request: MsgOddiyTx): Promise<MsgOddiyTxResponse> {
    const data = MsgOddiyTx.encode(request).finish();
    const promise = this.rpc.request("goan.goan.Msg", "OddiyTx", data);
    return promise.then((data) => MsgOddiyTxResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
