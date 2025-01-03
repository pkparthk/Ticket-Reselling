/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace TicketSale {
  export type OfferStruct = { buyer: AddressLike; offerPrice: BigNumberish };

  export type OfferStructOutput = [buyer: string, offerPrice: bigint] & {
    buyer: string;
    offerPrice: bigint;
  };
}

export interface TicketSaleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOffer"
      | "buyTicket"
      | "createTicket"
      | "getTicketOffers"
      | "getUserTickets"
      | "makeOffer"
      | "nextTicketId"
      | "ticketOffers"
      | "tickets"
      | "userTickets"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OfferAccepted"
      | "OfferMade"
      | "TicketBought"
      | "TicketCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTicket",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createTicket",
    values: [string, string, BigNumberish, BigNumberish, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTicketOffers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserTickets",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "makeOffer",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextTicketId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ticketOffers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tickets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userTickets",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyTicket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTicketOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeOffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextTicketId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticketOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userTickets",
    data: BytesLike
  ): Result;
}

export namespace OfferAcceptedEvent {
  export type InputTuple = [
    ticketId: BigNumberish,
    buyer: AddressLike,
    acceptedPrice: BigNumberish
  ];
  export type OutputTuple = [
    ticketId: bigint,
    buyer: string,
    acceptedPrice: bigint
  ];
  export interface OutputObject {
    ticketId: bigint;
    buyer: string;
    acceptedPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OfferMadeEvent {
  export type InputTuple = [
    ticketId: BigNumberish,
    buyer: AddressLike,
    offerPrice: BigNumberish
  ];
  export type OutputTuple = [
    ticketId: bigint,
    buyer: string,
    offerPrice: bigint
  ];
  export interface OutputObject {
    ticketId: bigint;
    buyer: string;
    offerPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TicketBoughtEvent {
  export type InputTuple = [
    id: BigNumberish,
    buyer: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [id: bigint, buyer: string, amount: bigint];
  export interface OutputObject {
    id: bigint;
    buyer: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TicketCreatedEvent {
  export type InputTuple = [
    id: BigNumberish,
    name: string,
    location: string,
    price: BigNumberish,
    quantity: BigNumberish,
    isNegotiable: boolean,
    seller: AddressLike
  ];
  export type OutputTuple = [
    id: bigint,
    name: string,
    location: string,
    price: bigint,
    quantity: bigint,
    isNegotiable: boolean,
    seller: string
  ];
  export interface OutputObject {
    id: bigint;
    name: string;
    location: string;
    price: bigint;
    quantity: bigint;
    isNegotiable: boolean;
    seller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TicketSale extends BaseContract {
  connect(runner?: ContractRunner | null): TicketSale;
  waitForDeployment(): Promise<this>;

  interface: TicketSaleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptOffer: TypedContractMethod<
    [ticketId: BigNumberish, offerIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  buyTicket: TypedContractMethod<
    [ticketId: BigNumberish, quantity: BigNumberish],
    [void],
    "payable"
  >;

  createTicket: TypedContractMethod<
    [
      name: string,
      location: string,
      price: BigNumberish,
      quantity: BigNumberish,
      isNegotiable: boolean,
      minOffer: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getTicketOffers: TypedContractMethod<
    [ticketId: BigNumberish],
    [TicketSale.OfferStructOutput[]],
    "view"
  >;

  getUserTickets: TypedContractMethod<[user: AddressLike], [bigint[]], "view">;

  makeOffer: TypedContractMethod<
    [ticketId: BigNumberish, offerPrice: BigNumberish],
    [void],
    "nonpayable"
  >;

  nextTicketId: TypedContractMethod<[], [bigint], "view">;

  ticketOffers: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [[string, bigint] & { buyer: string; offerPrice: bigint }],
    "view"
  >;

  tickets: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        bigint,
        string,
        string,
        bigint,
        bigint,
        boolean,
        bigint,
        string,
        boolean
      ] & {
        id: bigint;
        name: string;
        location: string;
        price: bigint;
        quantity: bigint;
        isNegotiable: boolean;
        minOffer: bigint;
        seller: string;
        soldOut: boolean;
      }
    ],
    "view"
  >;

  userTickets: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOffer"
  ): TypedContractMethod<
    [ticketId: BigNumberish, offerIndex: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buyTicket"
  ): TypedContractMethod<
    [ticketId: BigNumberish, quantity: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createTicket"
  ): TypedContractMethod<
    [
      name: string,
      location: string,
      price: BigNumberish,
      quantity: BigNumberish,
      isNegotiable: boolean,
      minOffer: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getTicketOffers"
  ): TypedContractMethod<
    [ticketId: BigNumberish],
    [TicketSale.OfferStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserTickets"
  ): TypedContractMethod<[user: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "makeOffer"
  ): TypedContractMethod<
    [ticketId: BigNumberish, offerPrice: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "nextTicketId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ticketOffers"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [[string, bigint] & { buyer: string; offerPrice: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "tickets"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        bigint,
        string,
        string,
        bigint,
        bigint,
        boolean,
        bigint,
        string,
        boolean
      ] & {
        id: bigint;
        name: string;
        location: string;
        price: bigint;
        quantity: bigint;
        isNegotiable: boolean;
        minOffer: bigint;
        seller: string;
        soldOut: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "userTickets"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  getEvent(
    key: "OfferAccepted"
  ): TypedContractEvent<
    OfferAcceptedEvent.InputTuple,
    OfferAcceptedEvent.OutputTuple,
    OfferAcceptedEvent.OutputObject
  >;
  getEvent(
    key: "OfferMade"
  ): TypedContractEvent<
    OfferMadeEvent.InputTuple,
    OfferMadeEvent.OutputTuple,
    OfferMadeEvent.OutputObject
  >;
  getEvent(
    key: "TicketBought"
  ): TypedContractEvent<
    TicketBoughtEvent.InputTuple,
    TicketBoughtEvent.OutputTuple,
    TicketBoughtEvent.OutputObject
  >;
  getEvent(
    key: "TicketCreated"
  ): TypedContractEvent<
    TicketCreatedEvent.InputTuple,
    TicketCreatedEvent.OutputTuple,
    TicketCreatedEvent.OutputObject
  >;

  filters: {
    "OfferAccepted(uint256,address,uint256)": TypedContractEvent<
      OfferAcceptedEvent.InputTuple,
      OfferAcceptedEvent.OutputTuple,
      OfferAcceptedEvent.OutputObject
    >;
    OfferAccepted: TypedContractEvent<
      OfferAcceptedEvent.InputTuple,
      OfferAcceptedEvent.OutputTuple,
      OfferAcceptedEvent.OutputObject
    >;

    "OfferMade(uint256,address,uint256)": TypedContractEvent<
      OfferMadeEvent.InputTuple,
      OfferMadeEvent.OutputTuple,
      OfferMadeEvent.OutputObject
    >;
    OfferMade: TypedContractEvent<
      OfferMadeEvent.InputTuple,
      OfferMadeEvent.OutputTuple,
      OfferMadeEvent.OutputObject
    >;

    "TicketBought(uint256,address,uint256)": TypedContractEvent<
      TicketBoughtEvent.InputTuple,
      TicketBoughtEvent.OutputTuple,
      TicketBoughtEvent.OutputObject
    >;
    TicketBought: TypedContractEvent<
      TicketBoughtEvent.InputTuple,
      TicketBoughtEvent.OutputTuple,
      TicketBoughtEvent.OutputObject
    >;

    "TicketCreated(uint256,string,string,uint256,uint256,bool,address)": TypedContractEvent<
      TicketCreatedEvent.InputTuple,
      TicketCreatedEvent.OutputTuple,
      TicketCreatedEvent.OutputObject
    >;
    TicketCreated: TypedContractEvent<
      TicketCreatedEvent.InputTuple,
      TicketCreatedEvent.OutputTuple,
      TicketCreatedEvent.OutputObject
    >;
  };
}
