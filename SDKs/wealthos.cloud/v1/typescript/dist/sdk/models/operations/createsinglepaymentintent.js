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
exports.CreateSinglePaymentIntentResponse = exports.CreateSinglePaymentIntentRequest = exports.CreateSinglePaymentIntentSecurity = exports.CreateSinglePaymentIntentHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateSinglePaymentIntentHeaders = /** @class */ (function (_super) {
    __extends(CreateSinglePaymentIntentHeaders, _super);
    function CreateSinglePaymentIntentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], CreateSinglePaymentIntentHeaders.prototype, "xApiKey", void 0);
    return CreateSinglePaymentIntentHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateSinglePaymentIntentHeaders = CreateSinglePaymentIntentHeaders;
var CreateSinglePaymentIntentSecurity = /** @class */ (function (_super) {
    __extends(CreateSinglePaymentIntentSecurity, _super);
    function CreateSinglePaymentIntentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], CreateSinglePaymentIntentSecurity.prototype, "apiSecretKey", void 0);
    return CreateSinglePaymentIntentSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateSinglePaymentIntentSecurity = CreateSinglePaymentIntentSecurity;
var CreateSinglePaymentIntentRequest = /** @class */ (function (_super) {
    __extends(CreateSinglePaymentIntentRequest, _super);
    function CreateSinglePaymentIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSinglePaymentIntentHeaders)
    ], CreateSinglePaymentIntentRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateSinglePaymentIntentRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSinglePaymentIntentSecurity)
    ], CreateSinglePaymentIntentRequest.prototype, "security", void 0);
    return CreateSinglePaymentIntentRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSinglePaymentIntentRequest = CreateSinglePaymentIntentRequest;
var CreateSinglePaymentIntentResponse = /** @class */ (function (_super) {
    __extends(CreateSinglePaymentIntentResponse, _super);
    function CreateSinglePaymentIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSinglePaymentIntentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSinglePaymentIntentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSinglePaymentIntentResponse.prototype, "createSinglePaymentIntent201ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSinglePaymentIntentResponse.prototype, "createSinglePaymentIntent400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSinglePaymentIntentResponse.prototype, "createSinglePaymentIntent401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSinglePaymentIntentResponse.prototype, "createSinglePaymentIntent403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSinglePaymentIntentResponse.prototype, "createSinglePaymentIntent409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSinglePaymentIntentResponse.prototype, "createSinglePaymentIntent429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSinglePaymentIntentResponse.prototype, "createSinglePaymentIntent500ApplicationJSONAny", void 0);
    return CreateSinglePaymentIntentResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSinglePaymentIntentResponse = CreateSinglePaymentIntentResponse;
