import { log } from "@graphprotocol/graph-ts"
import { DelegateFactory, CreateDelegate } from "../generated/DelegateFactory/DelegateFactory"
import { Delegate } from '../generated/templates'
import { DelegateContract } from "../generated/schema"

export function handleCreateDelegate(event: CreateDelegate): void {
  Delegate.create(event.params.delegateContract)
  var delegate = new DelegateContract(event.params.delegateContract.toHex())
  delegate.swapContract = event.params.swapContract
  delegate.indexerContarct = event.params.indexerContract
  delegate.delegateContractOwner = event.params.delegateContractOwner
  delegate.delegateTradeWallet = event.params.delegateTradeWallet
  delegate.save()
}
