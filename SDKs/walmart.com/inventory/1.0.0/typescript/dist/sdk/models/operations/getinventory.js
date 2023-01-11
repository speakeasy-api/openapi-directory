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
exports.GetInventoryResponse = exports.GetInventoryRequest = exports.GetInventory200ApplicationJson = exports.GetInventory200ApplicationJsonQuantity = exports.GetInventory200ApplicationJsonQuantityUnitEnum = exports.GetInventoryHeaders = exports.GetInventoryQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetInventoryQueryParams = /** @class */ (function (_super) {
    __extends(GetInventoryQueryParams, _super);
    function GetInventoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=shipNode" }),
        __metadata("design:type", String)
    ], GetInventoryQueryParams.prototype, "shipNode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sku" }),
        __metadata("design:type", String)
    ], GetInventoryQueryParams.prototype, "sku", void 0);
    return GetInventoryQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetInventoryQueryParams = GetInventoryQueryParams;
var GetInventoryHeaders = /** @class */ (function (_super) {
    __extends(GetInventoryHeaders, _super);
    function GetInventoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInventoryHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], GetInventoryHeaders.prototype, "wmCONSUMERCHANNELTYPE", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], GetInventoryHeaders.prototype, "wmQOSCORRELATIONID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], GetInventoryHeaders.prototype, "wmSECACCESSTOKEN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], GetInventoryHeaders.prototype, "wmSVCNAME", void 0);
    return GetInventoryHeaders;
}(utils_1.SpeakeasyBase));
exports.GetInventoryHeaders = GetInventoryHeaders;
var GetInventory200ApplicationJsonQuantityUnitEnum;
(function (GetInventory200ApplicationJsonQuantityUnitEnum) {
    GetInventory200ApplicationJsonQuantityUnitEnum["Each"] = "EACH";
})(GetInventory200ApplicationJsonQuantityUnitEnum = exports.GetInventory200ApplicationJsonQuantityUnitEnum || (exports.GetInventory200ApplicationJsonQuantityUnitEnum = {}));
var GetInventory200ApplicationJsonQuantity = /** @class */ (function (_super) {
    __extends(GetInventory200ApplicationJsonQuantity, _super);
    function GetInventory200ApplicationJsonQuantity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetInventory200ApplicationJsonQuantity.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GetInventory200ApplicationJsonQuantity.prototype, "unit", void 0);
    return GetInventory200ApplicationJsonQuantity;
}(utils_1.SpeakeasyBase));
exports.GetInventory200ApplicationJsonQuantity = GetInventory200ApplicationJsonQuantity;
var GetInventory200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetInventory200ApplicationJson, _super);
    function GetInventory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", GetInventory200ApplicationJsonQuantity)
    ], GetInventory200ApplicationJson.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GetInventory200ApplicationJson.prototype, "sku", void 0);
    return GetInventory200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetInventory200ApplicationJson = GetInventory200ApplicationJson;
var GetInventoryRequest = /** @class */ (function (_super) {
    __extends(GetInventoryRequest, _super);
    function GetInventoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInventoryQueryParams)
    ], GetInventoryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInventoryHeaders)
    ], GetInventoryRequest.prototype, "headers", void 0);
    return GetInventoryRequest;
}(utils_1.SpeakeasyBase));
exports.GetInventoryRequest = GetInventoryRequest;
var GetInventoryResponse = /** @class */ (function (_super) {
    __extends(GetInventoryResponse, _super);
    function GetInventoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetInventoryResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetInventoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetInventoryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInventory200ApplicationJson)
    ], GetInventoryResponse.prototype, "getInventory200ApplicationJSONObject", void 0);
    return GetInventoryResponse;
}(utils_1.SpeakeasyBase));
exports.GetInventoryResponse = GetInventoryResponse;
