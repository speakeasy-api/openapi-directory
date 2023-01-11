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
exports.ExecuteBuyTrasactionResponse = exports.ExecuteBuyTrasactionRequest = exports.ExecuteBuyTrasactionSecurity = exports.ExecuteBuyTrasactionBuyTransactionRequest = exports.ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell = exports.ExecuteBuyTrasactionHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ExecuteBuyTrasactionHeaders = /** @class */ (function (_super) {
    __extends(ExecuteBuyTrasactionHeaders, _super);
    function ExecuteBuyTrasactionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], ExecuteBuyTrasactionHeaders.prototype, "xApiKey", void 0);
    return ExecuteBuyTrasactionHeaders;
}(utils_1.SpeakeasyBase));
exports.ExecuteBuyTrasactionHeaders = ExecuteBuyTrasactionHeaders;
// ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell
/**
 * Definition of an single instruction(buy|sell)
**/
var ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell = /** @class */ (function (_super) {
    __extends(ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell, _super);
    function ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_order_id" }),
        __metadata("design:type", String)
    ], ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell.prototype, "clientOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investment_product_id" }),
        __metadata("design:type", String)
    ], ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell.prototype, "investmentProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell.prototype, "value", void 0);
    return ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell;
}(utils_1.SpeakeasyBase));
exports.ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell = ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell;
// ExecuteBuyTrasactionBuyTransactionRequest
/**
 * Definition of an buy transaction request
**/
var ExecuteBuyTrasactionBuyTransactionRequest = /** @class */ (function (_super) {
    __extends(ExecuteBuyTrasactionBuyTransactionRequest, _super);
    function ExecuteBuyTrasactionBuyTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investment_instructions", elemType: ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell }),
        __metadata("design:type", Array)
    ], ExecuteBuyTrasactionBuyTransactionRequest.prototype, "investmentInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pot_id" }),
        __metadata("design:type", String)
    ], ExecuteBuyTrasactionBuyTransactionRequest.prototype, "potId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ExecuteBuyTrasactionBuyTransactionRequest.prototype, "requestId", void 0);
    return ExecuteBuyTrasactionBuyTransactionRequest;
}(utils_1.SpeakeasyBase));
exports.ExecuteBuyTrasactionBuyTransactionRequest = ExecuteBuyTrasactionBuyTransactionRequest;
var ExecuteBuyTrasactionSecurity = /** @class */ (function (_super) {
    __extends(ExecuteBuyTrasactionSecurity, _super);
    function ExecuteBuyTrasactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], ExecuteBuyTrasactionSecurity.prototype, "apiSecretKey", void 0);
    return ExecuteBuyTrasactionSecurity;
}(utils_1.SpeakeasyBase));
exports.ExecuteBuyTrasactionSecurity = ExecuteBuyTrasactionSecurity;
var ExecuteBuyTrasactionRequest = /** @class */ (function (_super) {
    __extends(ExecuteBuyTrasactionRequest, _super);
    function ExecuteBuyTrasactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExecuteBuyTrasactionHeaders)
    ], ExecuteBuyTrasactionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ExecuteBuyTrasactionBuyTransactionRequest)
    ], ExecuteBuyTrasactionRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExecuteBuyTrasactionSecurity)
    ], ExecuteBuyTrasactionRequest.prototype, "security", void 0);
    return ExecuteBuyTrasactionRequest;
}(utils_1.SpeakeasyBase));
exports.ExecuteBuyTrasactionRequest = ExecuteBuyTrasactionRequest;
var ExecuteBuyTrasactionResponse = /** @class */ (function (_super) {
    __extends(ExecuteBuyTrasactionResponse, _super);
    function ExecuteBuyTrasactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ExecuteBuyTrasactionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ExecuteBuyTrasactionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteBuyTrasactionResponse.prototype, "executeBuyTrasaction200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteBuyTrasactionResponse.prototype, "executeBuyTrasaction400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteBuyTrasactionResponse.prototype, "executeBuyTrasaction401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteBuyTrasactionResponse.prototype, "executeBuyTrasaction403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteBuyTrasactionResponse.prototype, "executeBuyTrasaction404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteBuyTrasactionResponse.prototype, "executeBuyTrasaction409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteBuyTrasactionResponse.prototype, "executeBuyTrasaction429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteBuyTrasactionResponse.prototype, "executeBuyTrasaction500ApplicationJSONAny", void 0);
    return ExecuteBuyTrasactionResponse;
}(utils_1.SpeakeasyBase));
exports.ExecuteBuyTrasactionResponse = ExecuteBuyTrasactionResponse;
