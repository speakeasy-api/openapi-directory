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
exports.GetPaymentMethodType = exports.GetPaymentMethodTypeCardHolderInfo = void 0;
var utils_1 = require("../../../internal/utils");
// GetPaymentMethodTypeCardHolderInfo
/**
 * Container for the name and billing address for the card holder.
 *
**/
var GetPaymentMethodTypeCardHolderInfo = /** @class */ (function (_super) {
    __extends(GetPaymentMethodTypeCardHolderInfo, _super);
    function GetPaymentMethodTypeCardHolderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "addressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "addressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardHolderName" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "cardHolderName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zipCode" }),
        __metadata("design:type", String)
    ], GetPaymentMethodTypeCardHolderInfo.prototype, "zipCode", void 0);
    return GetPaymentMethodTypeCardHolderInfo;
}(utils_1.SpeakeasyBase));
exports.GetPaymentMethodTypeCardHolderInfo = GetPaymentMethodTypeCardHolderInfo;
var GetPaymentMethodType = /** @class */ (function (_super) {
    __extends(GetPaymentMethodType, _super);
    function GetPaymentMethodType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardHolderInfo" }),
        __metadata("design:type", GetPaymentMethodTypeCardHolderInfo)
    ], GetPaymentMethodType.prototype, "cardHolderInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardNumber" }),
        __metadata("design:type", String)
    ], GetPaymentMethodType.prototype, "cardNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardType" }),
        __metadata("design:type", String)
    ], GetPaymentMethodType.prototype, "cardType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultPaymentMethod" }),
        __metadata("design:type", Boolean)
    ], GetPaymentMethodType.prototype, "defaultPaymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationMonth" }),
        __metadata("design:type", Number)
    ], GetPaymentMethodType.prototype, "expirationMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationYear" }),
        __metadata("design:type", Number)
    ], GetPaymentMethodType.prototype, "expirationYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPaymentMethodType.prototype, "id", void 0);
    return GetPaymentMethodType;
}(utils_1.SpeakeasyBase));
exports.GetPaymentMethodType = GetPaymentMethodType;
