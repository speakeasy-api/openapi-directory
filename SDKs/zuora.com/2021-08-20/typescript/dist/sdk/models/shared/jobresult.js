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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobResult = exports.JobResultSubscriptions = exports.JobResultSubscriptionsStatusEnum = exports.JobResultStatusEnum = exports.JobResultReasons = exports.JobResultRamps = exports.JobResultOrderLineItems = void 0;
var utils_1 = require("../../../internal/utils");
var JobResultOrderLineItems = /** @class */ (function (_super) {
    __extends(JobResultOrderLineItems, _super);
    function JobResultOrderLineItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], JobResultOrderLineItems.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemNumber" }),
        __metadata("design:type", String)
    ], JobResultOrderLineItems.prototype, "itemNumber", void 0);
    return JobResultOrderLineItems;
}(utils_1.SpeakeasyBase));
exports.JobResultOrderLineItems = JobResultOrderLineItems;
var JobResultRamps = /** @class */ (function (_super) {
    __extends(JobResultRamps, _super);
    function JobResultRamps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rampNumber" }),
        __metadata("design:type", String)
    ], JobResultRamps.prototype, "rampNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], JobResultRamps.prototype, "subscriptionNumber", void 0);
    return JobResultRamps;
}(utils_1.SpeakeasyBase));
exports.JobResultRamps = JobResultRamps;
var JobResultReasons = /** @class */ (function (_super) {
    __extends(JobResultReasons, _super);
    function JobResultReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], JobResultReasons.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], JobResultReasons.prototype, "message", void 0);
    return JobResultReasons;
}(utils_1.SpeakeasyBase));
exports.JobResultReasons = JobResultReasons;
var JobResultStatusEnum;
(function (JobResultStatusEnum) {
    JobResultStatusEnum["Completed"] = "Completed";
    JobResultStatusEnum["Pending"] = "Pending";
})(JobResultStatusEnum = exports.JobResultStatusEnum || (exports.JobResultStatusEnum = {}));
var JobResultSubscriptionsStatusEnum;
(function (JobResultSubscriptionsStatusEnum) {
    JobResultSubscriptionsStatusEnum["Active"] = "Active";
    JobResultSubscriptionsStatusEnum["PendingActivation"] = "Pending Activation";
    JobResultSubscriptionsStatusEnum["PendingAcceptance"] = "Pending Acceptance";
    JobResultSubscriptionsStatusEnum["Cancelled"] = "Cancelled";
})(JobResultSubscriptionsStatusEnum = exports.JobResultSubscriptionsStatusEnum || (exports.JobResultSubscriptionsStatusEnum = {}));
var JobResultSubscriptions = /** @class */ (function (_super) {
    __extends(JobResultSubscriptions, _super);
    function JobResultSubscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], JobResultSubscriptions.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], JobResultSubscriptions.prototype, "subscriptionNumber", void 0);
    return JobResultSubscriptions;
}(utils_1.SpeakeasyBase));
exports.JobResultSubscriptions = JobResultSubscriptions;
// JobResult
/**
 * **Note:** The schema of the `result` nested field is the same as the response body schema of either the ["Create an order"](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or the ["Preview an order"](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation, depending on the purpose of the job.
 *
 * The following schema for the nested `result` field is defined as the response body schema of "Create an order". See [Preview an Order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) for the response body schema of "Preview an order".
 *
**/
var JobResult = /** @class */ (function (_super) {
    __extends(JobResult, _super);
    function JobResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemoIds" }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "creditMemoIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemoNumbers" }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "creditMemoNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceId" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "invoiceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceNumbers" }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "invoiceNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "orderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderLineItems", elemType: JobResultOrderLineItems }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "orderLineItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderNumber" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "orderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paidAmount" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "paidAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentId" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentNumber" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "paymentNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processId" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "processId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ramps", elemType: JobResultRamps }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "ramps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasons", elemType: JobResultReasons }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "reasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], JobResult.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionIds" }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "subscriptionIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumbers" }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "subscriptionNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions", elemType: JobResultSubscriptions }),
        __metadata("design:type", Array)
    ], JobResult.prototype, "subscriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], JobResult.prototype, "success", void 0);
    return JobResult;
}(utils_1.SpeakeasyBase));
exports.JobResult = JobResult;
