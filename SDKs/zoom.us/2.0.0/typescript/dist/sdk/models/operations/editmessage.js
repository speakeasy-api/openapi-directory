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
exports.EditMessageResponse = exports.EditMessageRequest = exports.EditMessageSecurity = exports.EditMessageRequests = exports.EditMessageMultipartFormData = exports.EditMessageApplicationJson = exports.EditMessagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EditMessagePathParams = /** @class */ (function (_super) {
    __extends(EditMessagePathParams, _super);
    function EditMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=messageId" }),
        __metadata("design:type", String)
    ], EditMessagePathParams.prototype, "messageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], EditMessagePathParams.prototype, "userId", void 0);
    return EditMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.EditMessagePathParams = EditMessagePathParams;
var EditMessageApplicationJson = /** @class */ (function (_super) {
    __extends(EditMessageApplicationJson, _super);
    function EditMessageApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EditMessageApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_channel" }),
        __metadata("design:type", String)
    ], EditMessageApplicationJson.prototype, "toChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_contact" }),
        __metadata("design:type", String)
    ], EditMessageApplicationJson.prototype, "toContact", void 0);
    return EditMessageApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EditMessageApplicationJson = EditMessageApplicationJson;
var EditMessageMultipartFormData = /** @class */ (function (_super) {
    __extends(EditMessageMultipartFormData, _super);
    function EditMessageMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=message" }),
        __metadata("design:type", String)
    ], EditMessageMultipartFormData.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=to_channel" }),
        __metadata("design:type", String)
    ], EditMessageMultipartFormData.prototype, "toChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=to_contact" }),
        __metadata("design:type", String)
    ], EditMessageMultipartFormData.prototype, "toContact", void 0);
    return EditMessageMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.EditMessageMultipartFormData = EditMessageMultipartFormData;
var EditMessageRequests = /** @class */ (function (_super) {
    __extends(EditMessageRequests, _super);
    function EditMessageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EditMessageApplicationJson)
    ], EditMessageRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", EditMessageMultipartFormData)
    ], EditMessageRequests.prototype, "object1", void 0);
    return EditMessageRequests;
}(utils_1.SpeakeasyBase));
exports.EditMessageRequests = EditMessageRequests;
var EditMessageSecurity = /** @class */ (function (_super) {
    __extends(EditMessageSecurity, _super);
    function EditMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], EditMessageSecurity.prototype, "oAuth", void 0);
    return EditMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.EditMessageSecurity = EditMessageSecurity;
var EditMessageRequest = /** @class */ (function (_super) {
    __extends(EditMessageRequest, _super);
    function EditMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EditMessagePathParams)
    ], EditMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EditMessageRequests)
    ], EditMessageRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EditMessageSecurity)
    ], EditMessageRequest.prototype, "security", void 0);
    return EditMessageRequest;
}(utils_1.SpeakeasyBase));
exports.EditMessageRequest = EditMessageRequest;
var EditMessageResponse = /** @class */ (function (_super) {
    __extends(EditMessageResponse, _super);
    function EditMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EditMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EditMessageResponse.prototype, "statusCode", void 0);
    return EditMessageResponse;
}(utils_1.SpeakeasyBase));
exports.EditMessageResponse = EditMessageResponse;
