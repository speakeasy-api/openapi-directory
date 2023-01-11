import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluateAccountAddress } from "./evaluateaccountaddress";



export class EvaluateAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: EvaluateAccountAddress;
}
