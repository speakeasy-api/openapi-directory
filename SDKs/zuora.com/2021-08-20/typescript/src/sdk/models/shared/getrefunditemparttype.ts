import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRefundItemPartType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creditMemoItemId" })
  creditMemoItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=creditTaxItemId" })
  creditTaxItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: Date;
}
