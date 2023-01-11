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
exports.SendimmessagesResponse = exports.SendimmessagesRequest = exports.Sendimmessages201ApplicationJson = exports.SendimmessagesSecurity = exports.SendimmessagesRequests = exports.SendimmessagesMultipartFormData = exports.SendimmessagesApplicationJson = exports.SendimmessagesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SendimmessagesQueryParams = /** @class */ (function (_super) {
    __extends(SendimmessagesQueryParams, _super);
    function SendimmessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=chat_user" }),
        __metadata("design:type", String)
    ], SendimmessagesQueryParams.prototype, "chatUser", void 0);
    return SendimmessagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.SendimmessagesQueryParams = SendimmessagesQueryParams;
var SendimmessagesApplicationJson = /** @class */ (function (_super) {
    __extends(SendimmessagesApplicationJson, _super);
    function SendimmessagesApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendimmessagesApplicationJson.prototype, "message", void 0);
    return SendimmessagesApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendimmessagesApplicationJson = SendimmessagesApplicationJson;
var SendimmessagesMultipartFormData = /** @class */ (function (_super) {
    __extends(SendimmessagesMultipartFormData, _super);
    function SendimmessagesMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=message" }),
        __metadata("design:type", String)
    ], SendimmessagesMultipartFormData.prototype, "message", void 0);
    return SendimmessagesMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.SendimmessagesMultipartFormData = SendimmessagesMultipartFormData;
var SendimmessagesRequests = /** @class */ (function (_super) {
    __extends(SendimmessagesRequests, _super);
    function SendimmessagesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendimmessagesApplicationJson)
    ], SendimmessagesRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SendimmessagesMultipartFormData)
    ], SendimmessagesRequests.prototype, "object1", void 0);
    return SendimmessagesRequests;
}(utils_1.SpeakeasyBase));
exports.SendimmessagesRequests = SendimmessagesRequests;
var SendimmessagesSecurity = /** @class */ (function (_super) {
    __extends(SendimmessagesSecurity, _super);
    function SendimmessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], SendimmessagesSecurity.prototype, "oAuth", void 0);
    return SendimmessagesSecurity;
}(utils_1.SpeakeasyBase));
exports.SendimmessagesSecurity = SendimmessagesSecurity;
var Sendimmessages201ApplicationJson = /** @class */ (function (_super) {
    __extends(Sendimmessages201ApplicationJson, _super);
    function Sendimmessages201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Sendimmessages201ApplicationJson.prototype, "id", void 0);
    return Sendimmessages201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sendimmessages201ApplicationJson = Sendimmessages201ApplicationJson;
var SendimmessagesRequest = /** @class */ (function (_super) {
    __extends(SendimmessagesRequest, _super);
    function SendimmessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendimmessagesQueryParams)
    ], SendimmessagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendimmessagesRequests)
    ], SendimmessagesRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendimmessagesSecurity)
    ], SendimmessagesRequest.prototype, "security", void 0);
    return SendimmessagesRequest;
}(utils_1.SpeakeasyBase));
exports.SendimmessagesRequest = SendimmessagesRequest;
var SendimmessagesResponse = /** @class */ (function (_super) {
    __extends(SendimmessagesResponse, _super);
    function SendimmessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SendimmessagesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SendimmessagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SendimmessagesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sendimmessages201ApplicationJson)
    ], SendimmessagesResponse.prototype, "sendimmessages201ApplicationJSONObject", void 0);
    return SendimmessagesResponse;
}(utils_1.SpeakeasyBase));
exports.SendimmessagesResponse = SendimmessagesResponse;
