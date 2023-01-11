import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RefundPartResponseTypewithSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creditMemoId" })
  creditMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: Date;
}
