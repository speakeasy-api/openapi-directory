import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";



export class EvaluateAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address", elemType: AccountAddress })
  address?: AccountAddress[];

  @SpeakeasyMetadata({ data: "json, name=isValidAddress" })
  isValidAddress?: boolean;
}
