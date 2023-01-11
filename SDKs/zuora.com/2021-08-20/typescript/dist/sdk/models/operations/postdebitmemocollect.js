"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDebitMemoCollectResponse = exports.PostDebitMemoCollectRequest = exports.PostDebitMemoCollect200ApplicationJson = exports.PostDebitMemoCollect200ApplicationJsonProcessedPayment = exports.PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum = exports.PostDebitMemoCollect200ApplicationJsonDebitMemo = exports.PostDebitMemoCollect200ApplicationJsonAppliedPayments = exports.PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos = exports.PostDebitMemoCollectHeaders = exports.PostDebitMemoCollectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostDebitMemoCollectPathParams = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollectPathParams, _super);
    function PostDebitMemoCollectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=debitMemoId" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollectPathParams.prototype, "debitMemoId", void 0);
    return PostDebitMemoCollectPathParams;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollectPathParams = PostDebitMemoCollectPathParams;
var PostDebitMemoCollectHeaders = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollectHeaders, _super);
    function PostDebitMemoCollectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollectHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollectHeaders.prototype, "zuoraTrackId", void 0);
    return PostDebitMemoCollectHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollectHeaders = PostDebitMemoCollectHeaders;
var PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos, _super);
    function PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedAmount" }),
        __metadata("design:type", Number)
    ], PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos.prototype, "appliedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedAmount" }),
        __metadata("design:type", Number)
    ], PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos.prototype, "unappliedAmount", void 0);
    return PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos = PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos;
var PostDebitMemoCollect200ApplicationJsonAppliedPayments = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollect200ApplicationJsonAppliedPayments, _super);
    function PostDebitMemoCollect200ApplicationJsonAppliedPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedAmount" }),
        __metadata("design:type", Number)
    ], PostDebitMemoCollect200ApplicationJsonAppliedPayments.prototype, "appliedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonAppliedPayments.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonAppliedPayments.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedAmount" }),
        __metadata("design:type", Number)
    ], PostDebitMemoCollect200ApplicationJsonAppliedPayments.prototype, "unappliedAmount", void 0);
    return PostDebitMemoCollect200ApplicationJsonAppliedPayments;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollect200ApplicationJsonAppliedPayments = PostDebitMemoCollect200ApplicationJsonAppliedPayments;
// PostDebitMemoCollect200ApplicationJsonDebitMemo
/**
 * The information about the debit memo that just collected.
 *
**/
var PostDebitMemoCollect200ApplicationJsonDebitMemo = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollect200ApplicationJsonDebitMemo, _super);
    function PostDebitMemoCollect200ApplicationJsonDebitMemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonDebitMemo.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonDebitMemo.prototype, "number", void 0);
    return PostDebitMemoCollect200ApplicationJsonDebitMemo;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollect200ApplicationJsonDebitMemo = PostDebitMemoCollect200ApplicationJsonDebitMemo;
var PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum;
(function (PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum) {
    PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum["Processing"] = "Processing";
    PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum["Processed"] = "Processed";
    PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum["Error"] = "Error";
    PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum["Canceled"] = "Canceled";
})(PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum = exports.PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum || (exports.PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum = {}));
// PostDebitMemoCollect200ApplicationJsonProcessedPayment
/**
 * The information about the payment that newly processed to the debit memo.
 *
**/
var PostDebitMemoCollect200ApplicationJsonProcessedPayment = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollect200ApplicationJsonProcessedPayment, _super);
    function PostDebitMemoCollect200ApplicationJsonProcessedPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostDebitMemoCollect200ApplicationJsonProcessedPayment.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayId" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonProcessedPayment.prototype, "gatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponse" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonProcessedPayment.prototype, "gatewayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponseCode" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonProcessedPayment.prototype, "gatewayResponseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonProcessedPayment.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonProcessedPayment.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodId" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonProcessedPayment.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostDebitMemoCollect200ApplicationJsonProcessedPayment.prototype, "status", void 0);
    return PostDebitMemoCollect200ApplicationJsonProcessedPayment;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollect200ApplicationJsonProcessedPayment = PostDebitMemoCollect200ApplicationJsonProcessedPayment;
var PostDebitMemoCollect200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollect200ApplicationJson, _super);
    function PostDebitMemoCollect200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedCreditMemos", elemType: PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos }),
        __metadata("design:type", Array)
    ], PostDebitMemoCollect200ApplicationJson.prototype, "appliedCreditMemos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedPayments", elemType: PostDebitMemoCollect200ApplicationJsonAppliedPayments }),
        __metadata("design:type", Array)
    ], PostDebitMemoCollect200ApplicationJson.prototype, "appliedPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debitMemo" }),
        __metadata("design:type", PostDebitMemoCollect200ApplicationJsonDebitMemo)
    ], PostDebitMemoCollect200ApplicationJson.prototype, "debitMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processedPayment" }),
        __metadata("design:type", PostDebitMemoCollect200ApplicationJsonProcessedPayment)
    ], PostDebitMemoCollect200ApplicationJson.prototype, "processedPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PostDebitMemoCollect200ApplicationJson.prototype, "success", void 0);
    return PostDebitMemoCollect200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollect200ApplicationJson = PostDebitMemoCollect200ApplicationJson;
var PostDebitMemoCollectRequest = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollectRequest, _super);
    function PostDebitMemoCollectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDebitMemoCollectPathParams)
    ], PostDebitMemoCollectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDebitMemoCollectHeaders)
    ], PostDebitMemoCollectRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DebitMemoCollectRequest)
    ], PostDebitMemoCollectRequest.prototype, "request", void 0);
    return PostDebitMemoCollectRequest;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollectRequest = PostDebitMemoCollectRequest;
var PostDebitMemoCollectResponse = /** @class */ (function (_super) {
    __extends(PostDebitMemoCollectResponse, _super);
    function PostDebitMemoCollectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDebitMemoCollectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostDebitMemoCollectResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDebitMemoCollect200ApplicationJson)
    ], PostDebitMemoCollectResponse.prototype, "postDebitMemoCollect200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDebitMemoCollectResponse.prototype, "statusCode", void 0);
    return PostDebitMemoCollectResponse;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoCollectResponse = PostDebitMemoCollectResponse;
