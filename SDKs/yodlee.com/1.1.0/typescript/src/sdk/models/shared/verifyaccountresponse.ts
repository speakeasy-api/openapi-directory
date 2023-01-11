import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerifyAccount } from "./verifyaccount";



export class VerifyAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verifyAccount" })
  verifyAccount?: VerifyAccount;
}
