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
exports.PutOrderPatchRequestType = exports.PutOrderPatchRequestTypeSubscriptions = exports.PutOrderPatchRequestTypeSubscriptionsOrderActions = void 0;
var utils_1 = require("../../../internal/utils");
var PutOrderPatchRequestTypeSubscriptionsOrderActions = /** @class */ (function (_super) {
    __extends(PutOrderPatchRequestTypeSubscriptionsOrderActions, _super);
    function PutOrderPatchRequestTypeSubscriptionsOrderActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PutOrderPatchRequestTypeSubscriptionsOrderActions.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderActionId" }),
        __metadata("design:type", String)
    ], PutOrderPatchRequestTypeSubscriptionsOrderActions.prototype, "orderActionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], PutOrderPatchRequestTypeSubscriptionsOrderActions.prototype, "sequence", void 0);
    return PutOrderPatchRequestTypeSubscriptionsOrderActions;
}(utils_1.SpeakeasyBase));
exports.PutOrderPatchRequestTypeSubscriptionsOrderActions = PutOrderPatchRequestTypeSubscriptionsOrderActions;
var PutOrderPatchRequestTypeSubscriptions = /** @class */ (function (_super) {
    __extends(PutOrderPatchRequestTypeSubscriptions, _super);
    function PutOrderPatchRequestTypeSubscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderActions", elemType: PutOrderPatchRequestTypeSubscriptionsOrderActions }),
        __metadata("design:type", Array)
    ], PutOrderPatchRequestTypeSubscriptions.prototype, "orderActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], PutOrderPatchRequestTypeSubscriptions.prototype, "subscriptionNumber", void 0);
    return PutOrderPatchRequestTypeSubscriptions;
}(utils_1.SpeakeasyBase));
exports.PutOrderPatchRequestTypeSubscriptions = PutOrderPatchRequestTypeSubscriptions;
var PutOrderPatchRequestType = /** @class */ (function (_super) {
    __extends(PutOrderPatchRequestType, _super);
    function PutOrderPatchRequestType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PutOrderPatchRequestType.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions", elemType: PutOrderPatchRequestTypeSubscriptions }),
        __metadata("design:type", Array)
    ], PutOrderPatchRequestType.prototype, "subscriptions", void 0);
    return PutOrderPatchRequestType;
}(utils_1.SpeakeasyBase));
exports.PutOrderPatchRequestType = PutOrderPatchRequestType;
