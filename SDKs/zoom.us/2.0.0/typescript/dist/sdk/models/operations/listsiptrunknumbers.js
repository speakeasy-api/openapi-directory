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
exports.ListSipTrunkNumbersResponse = exports.ListSipTrunkNumbersRequest = exports.ListSipTrunkNumbers200ApplicationJson = exports.ListSipTrunkNumbers200ApplicationJsonPhoneNumbers = exports.ListSipTrunkNumbersSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListSipTrunkNumbersSecurity = /** @class */ (function (_super) {
    __extends(ListSipTrunkNumbersSecurity, _super);
    function ListSipTrunkNumbersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListSipTrunkNumbersSecurity.prototype, "oAuth", void 0);
    return ListSipTrunkNumbersSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunkNumbersSecurity = ListSipTrunkNumbersSecurity;
var ListSipTrunkNumbers200ApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(ListSipTrunkNumbers200ApplicationJsonPhoneNumbers, _super);
    function ListSipTrunkNumbers200ApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], ListSipTrunkNumbers200ApplicationJsonPhoneNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ListSipTrunkNumbers200ApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return ListSipTrunkNumbers200ApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunkNumbers200ApplicationJsonPhoneNumbers = ListSipTrunkNumbers200ApplicationJsonPhoneNumbers;
var ListSipTrunkNumbers200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSipTrunkNumbers200ApplicationJson, _super);
    function ListSipTrunkNumbers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: ListSipTrunkNumbers200ApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], ListSipTrunkNumbers200ApplicationJson.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListSipTrunkNumbers200ApplicationJson.prototype, "totalRecords", void 0);
    return ListSipTrunkNumbers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunkNumbers200ApplicationJson = ListSipTrunkNumbers200ApplicationJson;
var ListSipTrunkNumbersRequest = /** @class */ (function (_super) {
    __extends(ListSipTrunkNumbersRequest, _super);
    function ListSipTrunkNumbersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipTrunkNumbersSecurity)
    ], ListSipTrunkNumbersRequest.prototype, "security", void 0);
    return ListSipTrunkNumbersRequest;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunkNumbersRequest = ListSipTrunkNumbersRequest;
var ListSipTrunkNumbersResponse = /** @class */ (function (_super) {
    __extends(ListSipTrunkNumbersResponse, _super);
    function ListSipTrunkNumbersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListSipTrunkNumbersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipTrunkNumbersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSipTrunkNumbersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipTrunkNumbers200ApplicationJson)
    ], ListSipTrunkNumbersResponse.prototype, "listSipTrunkNumbers200ApplicationJSONObject", void 0);
    return ListSipTrunkNumbersResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipTrunkNumbersResponse = ListSipTrunkNumbersResponse;
