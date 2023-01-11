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
exports.ExecuteSwitchTrasactionResponse = exports.ExecuteSwitchTrasactionRequest = exports.ExecuteSwitchTrasactionSecurity = exports.ExecuteSwitchTrasactionSwitchInstructionRequest = exports.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest = exports.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum = exports.ExecuteSwitchTrasactionHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ExecuteSwitchTrasactionHeaders = /** @class */ (function (_super) {
    __extends(ExecuteSwitchTrasactionHeaders, _super);
    function ExecuteSwitchTrasactionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], ExecuteSwitchTrasactionHeaders.prototype, "xApiKey", void 0);
    return ExecuteSwitchTrasactionHeaders;
}(utils_1.SpeakeasyBase));
exports.ExecuteSwitchTrasactionHeaders = ExecuteSwitchTrasactionHeaders;
var ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;
(function (ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum) {
    ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum["Percentage"] = "percentage";
    ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum["Unit"] = "unit";
    ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum["Value"] = "value";
})(ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum = exports.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum || (exports.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum = {}));
// ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest
/**
 * Each individual buy side and sell side instruction of the Switch request
**/
var ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest = /** @class */ (function (_super) {
    __extends(ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest, _super);
    function ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investment_product_id" }),
        __metadata("design:type", String)
    ], ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest.prototype, "investmentProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest.prototype, "value", void 0);
    return ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest;
}(utils_1.SpeakeasyBase));
exports.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest = ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest;
// ExecuteSwitchTrasactionSwitchInstructionRequest
/**
 * Definition of Switch instruction
**/
var ExecuteSwitchTrasactionSwitchInstructionRequest = /** @class */ (function (_super) {
    __extends(ExecuteSwitchTrasactionSwitchInstructionRequest, _super);
    function ExecuteSwitchTrasactionSwitchInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buy_instructions", elemType: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest }),
        __metadata("design:type", Array)
    ], ExecuteSwitchTrasactionSwitchInstructionRequest.prototype, "buyInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pot_id" }),
        __metadata("design:type", String)
    ], ExecuteSwitchTrasactionSwitchInstructionRequest.prototype, "potId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ExecuteSwitchTrasactionSwitchInstructionRequest.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sell_instructions", elemType: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest }),
        __metadata("design:type", Array)
    ], ExecuteSwitchTrasactionSwitchInstructionRequest.prototype, "sellInstructions", void 0);
    return ExecuteSwitchTrasactionSwitchInstructionRequest;
}(utils_1.SpeakeasyBase));
exports.ExecuteSwitchTrasactionSwitchInstructionRequest = ExecuteSwitchTrasactionSwitchInstructionRequest;
var ExecuteSwitchTrasactionSecurity = /** @class */ (function (_super) {
    __extends(ExecuteSwitchTrasactionSecurity, _super);
    function ExecuteSwitchTrasactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], ExecuteSwitchTrasactionSecurity.prototype, "apiSecretKey", void 0);
    return ExecuteSwitchTrasactionSecurity;
}(utils_1.SpeakeasyBase));
exports.ExecuteSwitchTrasactionSecurity = ExecuteSwitchTrasactionSecurity;
var ExecuteSwitchTrasactionRequest = /** @class */ (function (_super) {
    __extends(ExecuteSwitchTrasactionRequest, _super);
    function ExecuteSwitchTrasactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExecuteSwitchTrasactionHeaders)
    ], ExecuteSwitchTrasactionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ExecuteSwitchTrasactionSwitchInstructionRequest)
    ], ExecuteSwitchTrasactionRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExecuteSwitchTrasactionSecurity)
    ], ExecuteSwitchTrasactionRequest.prototype, "security", void 0);
    return ExecuteSwitchTrasactionRequest;
}(utils_1.SpeakeasyBase));
exports.ExecuteSwitchTrasactionRequest = ExecuteSwitchTrasactionRequest;
var ExecuteSwitchTrasactionResponse = /** @class */ (function (_super) {
    __extends(ExecuteSwitchTrasactionResponse, _super);
    function ExecuteSwitchTrasactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ExecuteSwitchTrasactionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ExecuteSwitchTrasactionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSwitchTrasactionResponse.prototype, "executeSwitchTrasaction200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSwitchTrasactionResponse.prototype, "executeSwitchTrasaction400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSwitchTrasactionResponse.prototype, "executeSwitchTrasaction401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSwitchTrasactionResponse.prototype, "executeSwitchTrasaction403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSwitchTrasactionResponse.prototype, "executeSwitchTrasaction404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSwitchTrasactionResponse.prototype, "executeSwitchTrasaction409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSwitchTrasactionResponse.prototype, "executeSwitchTrasaction429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSwitchTrasactionResponse.prototype, "executeSwitchTrasaction500ApplicationJSONAny", void 0);
    return ExecuteSwitchTrasactionResponse;
}(utils_1.SpeakeasyBase));
exports.ExecuteSwitchTrasactionResponse = ExecuteSwitchTrasactionResponse;
