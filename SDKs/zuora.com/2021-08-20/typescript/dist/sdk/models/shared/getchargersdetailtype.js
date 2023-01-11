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
exports.GetChargeRsDetailType = void 0;
var utils_1 = require("../../../internal/utils");
var getrevenueitemtyperesponse_1 = require("./getrevenueitemtyperesponse");
var GetChargeRsDetailType = /** @class */ (function (_super) {
    __extends(GetChargeRsDetailType, _super);
    function GetChargeRsDetailType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recognitionRuleName" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "recognitionRuleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recognizedRevenue" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "recognizedRevenue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revenueItems", elemType: getrevenueitemtyperesponse_1.GetRevenueItemTypeResponse }),
        __metadata("design:type", Array)
    ], GetChargeRsDetailType.prototype, "revenueItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionChargeId" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "subscriptionChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetChargeRsDetailType.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=undistributedUnrecognizedRevenue" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "undistributedUnrecognizedRevenue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unrecognizedRevenue" }),
        __metadata("design:type", String)
    ], GetChargeRsDetailType.prototype, "unrecognizedRevenue", void 0);
    return GetChargeRsDetailType;
}(utils_1.SpeakeasyBase));
exports.GetChargeRsDetailType = GetChargeRsDetailType;
