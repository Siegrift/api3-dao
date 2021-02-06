/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface GetterUtilsInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "balanceOfAt(uint256,address)": FunctionFragment;
    "claimReleaseReferenceBlocks(uint256)": FunctionFragment;
    "claimReleases(uint256)": FunctionFragment;
    "currentApr()": FunctionFragment;
    "locks(uint256)": FunctionFragment;
    "maxApr()": FunctionFragment;
    "minApr()": FunctionFragment;
    "rewardAmounts(uint256)": FunctionFragment;
    "rewardBlocks(uint256)": FunctionFragment;
    "rewardEpochLength()": FunctionFragment;
    "rewardPaidForEpoch(uint256)": FunctionFragment;
    "rewardReleases(uint256)": FunctionFragment;
    "rewardVestingPeriod()": FunctionFragment;
    "stakeTarget()": FunctionFragment;
    "totalDeposits()": FunctionFragment;
    "totalDepositsAt(uint256)": FunctionFragment;
    "totalShares(uint256)": FunctionFragment;
    "totalStaked(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "totalSupplyAt(uint256)": FunctionFragment;
    "updateAndGetBalanceOf(address)": FunctionFragment;
    "updateAndGetBalanceOfAt(address,uint256)": FunctionFragment;
    "updateCoeff()": FunctionFragment;
    "updateUserState(address,uint256)": FunctionFragment;
    "users(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReleaseReferenceBlocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReleases",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentApr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "locks", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "maxApr", values?: undefined): string;
  encodeFunctionData(functionFragment: "minApr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardAmounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardBlocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardEpochLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPaidForEpoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardReleases",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardVestingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakeTarget",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalDeposits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalDepositsAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAndGetBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAndGetBalanceOfAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCoeff",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateUserState",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "users", values: [string]): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReleaseReferenceBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReleases",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currentApr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxApr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minApr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardEpochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPaidForEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardReleases",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardVestingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeTarget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDepositsAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAndGetBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAndGetBalanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCoeff",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUserState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;

  events: {};
}

export class GetterUtils extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GetterUtilsInterface;

  functions: {
    balanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfAt(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOfAt(uint256,address)"(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimReleaseReferenceBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimReleaseReferenceBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimReleases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "claimReleases(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    currentApr(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentApr()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    locks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "locks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    maxApr(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxApr()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minApr(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minApr()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardAmounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "rewardAmounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "rewardBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardEpochLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rewardEpochLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPaidForEpoch(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "rewardPaidForEpoch(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    rewardReleases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "rewardReleases(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    rewardVestingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rewardVestingPeriod()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    stakeTarget(overrides?: CallOverrides): Promise<[BigNumber]>;

    "stakeTarget()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalDeposits(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalDeposits()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalDepositsAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalDepositsAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalShares(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "totalShares(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    totalStaked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "totalStaked(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupplyAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalSupplyAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateAndGetBalanceOf(
      userAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateAndGetBalanceOf(address)"(
      userAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateAndGetBalanceOfAt(
      userAddress: string,
      fromBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateAndGetBalanceOfAt(address,uint256)"(
      userAddress: string,
      fromBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateCoeff(overrides?: CallOverrides): Promise<[BigNumber]>;

    "updateCoeff()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateUserState(
      userAddress: string,
      targetBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateUserState(address,uint256)"(
      userAddress: string,
      targetBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        unstaked: BigNumber;
        locked: BigNumber;
        lastStateUpdateTargetBlock: BigNumber;
        unstakeScheduledAt: BigNumber;
        unstakeAmount: BigNumber;
      }
    >;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        unstaked: BigNumber;
        locked: BigNumber;
        lastStateUpdateTargetBlock: BigNumber;
        unstakeScheduledAt: BigNumber;
        unstakeAmount: BigNumber;
      }
    >;
  };

  balanceOf(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfAt(
    fromBlock: BigNumberish,
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOfAt(uint256,address)"(
    fromBlock: BigNumberish,
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimReleaseReferenceBlocks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimReleaseReferenceBlocks(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimReleases(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  "claimReleases(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  currentApr(overrides?: CallOverrides): Promise<BigNumber>;

  "currentApr()"(overrides?: CallOverrides): Promise<BigNumber>;

  locks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  "locks(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  maxApr(overrides?: CallOverrides): Promise<BigNumber>;

  "maxApr()"(overrides?: CallOverrides): Promise<BigNumber>;

  minApr(overrides?: CallOverrides): Promise<BigNumber>;

  "minApr()"(overrides?: CallOverrides): Promise<BigNumber>;

  rewardAmounts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "rewardAmounts(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardBlocks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "rewardBlocks(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

  "rewardEpochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPaidForEpoch(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "rewardPaidForEpoch(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  rewardReleases(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  "rewardReleases(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  rewardVestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "rewardVestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  stakeTarget(overrides?: CallOverrides): Promise<BigNumber>;

  "stakeTarget()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalDeposits(overrides?: CallOverrides): Promise<BigNumber>;

  "totalDeposits()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalDepositsAt(
    fromBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalDepositsAt(uint256)"(
    fromBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalShares(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  "totalShares(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  totalStaked(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  "totalStaked(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyAt(
    fromBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalSupplyAt(uint256)"(
    fromBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateAndGetBalanceOf(
    userAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateAndGetBalanceOf(address)"(
    userAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateAndGetBalanceOfAt(
    userAddress: string,
    fromBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateAndGetBalanceOfAt(address,uint256)"(
    userAddress: string,
    fromBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

  "updateCoeff()"(overrides?: CallOverrides): Promise<BigNumber>;

  updateUserState(
    userAddress: string,
    targetBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateUserState(address,uint256)"(
    userAddress: string,
    targetBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  users(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      unstaked: BigNumber;
      locked: BigNumber;
      lastStateUpdateTargetBlock: BigNumber;
      unstakeScheduledAt: BigNumber;
      unstakeAmount: BigNumber;
    }
  >;

  "users(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      unstaked: BigNumber;
      locked: BigNumber;
      lastStateUpdateTargetBlock: BigNumber;
      unstakeScheduledAt: BigNumber;
      unstakeAmount: BigNumber;
    }
  >;

  callStatic: {
    balanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfAt(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfAt(uint256,address)"(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReleaseReferenceBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimReleaseReferenceBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReleases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "claimReleases(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    currentApr(overrides?: CallOverrides): Promise<BigNumber>;

    "currentApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    locks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "locks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    maxApr(overrides?: CallOverrides): Promise<BigNumber>;

    "maxApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    minApr(overrides?: CallOverrides): Promise<BigNumber>;

    "minApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardAmounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardAmounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardEpochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPaidForEpoch(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "rewardPaidForEpoch(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rewardReleases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "rewardReleases(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    rewardVestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardVestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    stakeTarget(overrides?: CallOverrides): Promise<BigNumber>;

    "stakeTarget()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    "totalDeposits()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalDepositsAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalDepositsAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalShares(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "totalShares(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    totalStaked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "totalStaked(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalSupplyAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAndGetBalanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "updateAndGetBalanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAndGetBalanceOfAt(
      userAddress: string,
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "updateAndGetBalanceOfAt(address,uint256)"(
      userAddress: string,
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

    "updateCoeff()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateUserState(
      userAddress: string,
      targetBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateUserState(address,uint256)"(
      userAddress: string,
      targetBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        unstaked: BigNumber;
        locked: BigNumber;
        lastStateUpdateTargetBlock: BigNumber;
        unstakeScheduledAt: BigNumber;
        unstakeAmount: BigNumber;
      }
    >;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        unstaked: BigNumber;
        locked: BigNumber;
        lastStateUpdateTargetBlock: BigNumber;
        unstakeScheduledAt: BigNumber;
        unstakeAmount: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfAt(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfAt(uint256,address)"(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReleaseReferenceBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimReleaseReferenceBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReleases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimReleases(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentApr(overrides?: CallOverrides): Promise<BigNumber>;

    "currentApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    locks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "locks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxApr(overrides?: CallOverrides): Promise<BigNumber>;

    "maxApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    minApr(overrides?: CallOverrides): Promise<BigNumber>;

    "minApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardAmounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardAmounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardEpochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPaidForEpoch(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardPaidForEpoch(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardReleases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardReleases(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardVestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardVestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    stakeTarget(overrides?: CallOverrides): Promise<BigNumber>;

    "stakeTarget()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    "totalDeposits()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalDepositsAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalDepositsAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalShares(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalShares(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalStaked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalStaked(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalSupplyAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAndGetBalanceOf(
      userAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateAndGetBalanceOf(address)"(
      userAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateAndGetBalanceOfAt(
      userAddress: string,
      fromBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateAndGetBalanceOfAt(address,uint256)"(
      userAddress: string,
      fromBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

    "updateCoeff()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateUserState(
      userAddress: string,
      targetBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateUserState(address,uint256)"(
      userAddress: string,
      targetBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    users(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfAt(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfAt(uint256,address)"(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimReleaseReferenceBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimReleaseReferenceBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimReleases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimReleases(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentApr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentApr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    locks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "locks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxApr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxApr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minApr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minApr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardAmounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardAmounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardEpochLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardEpochLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPaidForEpoch(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardPaidForEpoch(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardReleases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardReleases(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardVestingPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardVestingPeriod()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakeTarget(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakeTarget()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalDeposits()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalDepositsAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalDepositsAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalShares(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalShares(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalStaked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalStaked(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupplyAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalSupplyAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateAndGetBalanceOf(
      userAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateAndGetBalanceOf(address)"(
      userAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateAndGetBalanceOfAt(
      userAddress: string,
      fromBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateAndGetBalanceOfAt(address,uint256)"(
      userAddress: string,
      fromBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateCoeff(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "updateCoeff()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateUserState(
      userAddress: string,
      targetBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateUserState(address,uint256)"(
      userAddress: string,
      targetBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
