import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTransactionCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: number;
}


export class DeleteTransactionCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTransactionCategoryPathParams;
}


export class DeleteTransactionCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
