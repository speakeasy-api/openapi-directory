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
exports.PostPhoneSipTrunkResponse = exports.PostPhoneSipTrunkRequest = exports.PostPhoneSipTrunk201ApplicationJson = exports.PostPhoneSipTrunk201ApplicationJsonSipTrunks = exports.PostPhoneSipTrunkSecurity = exports.PostPhoneSipTrunkRequests = exports.PostPhoneSipTrunkMultipartFormData1 = exports.PostPhoneSipTrunkMultipartFormDataSipTrunks = exports.PostPhoneSipTrunkApplicationJson = exports.PostPhoneSipTrunkApplicationJsonSipTrunks = exports.PostPhoneSipTrunkPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostPhoneSipTrunkPathParams = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkPathParams, _super);
    function PostPhoneSipTrunkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunkPathParams.prototype, "accountId", void 0);
    return PostPhoneSipTrunkPathParams;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkPathParams = PostPhoneSipTrunkPathParams;
var PostPhoneSipTrunkApplicationJsonSipTrunks = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkApplicationJsonSipTrunks, _super);
    function PostPhoneSipTrunkApplicationJsonSipTrunks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_account" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunkApplicationJsonSipTrunks.prototype, "carrierAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunkApplicationJsonSipTrunks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunkApplicationJsonSipTrunks.prototype, "name", void 0);
    return PostPhoneSipTrunkApplicationJsonSipTrunks;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkApplicationJsonSipTrunks = PostPhoneSipTrunkApplicationJsonSipTrunks;
var PostPhoneSipTrunkApplicationJson = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkApplicationJson, _super);
    function PostPhoneSipTrunkApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_trunks", elemType: PostPhoneSipTrunkApplicationJsonSipTrunks }),
        __metadata("design:type", Array)
    ], PostPhoneSipTrunkApplicationJson.prototype, "sipTrunks", void 0);
    return PostPhoneSipTrunkApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkApplicationJson = PostPhoneSipTrunkApplicationJson;
var PostPhoneSipTrunkMultipartFormDataSipTrunks = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkMultipartFormDataSipTrunks, _super);
    function PostPhoneSipTrunkMultipartFormDataSipTrunks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_account" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunkMultipartFormDataSipTrunks.prototype, "carrierAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunkMultipartFormDataSipTrunks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunkMultipartFormDataSipTrunks.prototype, "name", void 0);
    return PostPhoneSipTrunkMultipartFormDataSipTrunks;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkMultipartFormDataSipTrunks = PostPhoneSipTrunkMultipartFormDataSipTrunks;
var PostPhoneSipTrunkMultipartFormData1 = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkMultipartFormData1, _super);
    function PostPhoneSipTrunkMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=sip_trunks;json=true", elemType: PostPhoneSipTrunkMultipartFormDataSipTrunks }),
        __metadata("design:type", Array)
    ], PostPhoneSipTrunkMultipartFormData1.prototype, "sipTrunks", void 0);
    return PostPhoneSipTrunkMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkMultipartFormData1 = PostPhoneSipTrunkMultipartFormData1;
var PostPhoneSipTrunkRequests = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkRequests, _super);
    function PostPhoneSipTrunkRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPhoneSipTrunkApplicationJson)
    ], PostPhoneSipTrunkRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostPhoneSipTrunkMultipartFormData1)
    ], PostPhoneSipTrunkRequests.prototype, "object1", void 0);
    return PostPhoneSipTrunkRequests;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkRequests = PostPhoneSipTrunkRequests;
var PostPhoneSipTrunkSecurity = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkSecurity, _super);
    function PostPhoneSipTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], PostPhoneSipTrunkSecurity.prototype, "oAuth", void 0);
    return PostPhoneSipTrunkSecurity;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkSecurity = PostPhoneSipTrunkSecurity;
var PostPhoneSipTrunk201ApplicationJsonSipTrunks = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunk201ApplicationJsonSipTrunks, _super);
    function PostPhoneSipTrunk201ApplicationJsonSipTrunks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_account" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunk201ApplicationJsonSipTrunks.prototype, "carrierAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunk201ApplicationJsonSipTrunks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPhoneSipTrunk201ApplicationJsonSipTrunks.prototype, "name", void 0);
    return PostPhoneSipTrunk201ApplicationJsonSipTrunks;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunk201ApplicationJsonSipTrunks = PostPhoneSipTrunk201ApplicationJsonSipTrunks;
var PostPhoneSipTrunk201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunk201ApplicationJson, _super);
    function PostPhoneSipTrunk201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_trunks", elemType: PostPhoneSipTrunk201ApplicationJsonSipTrunks }),
        __metadata("design:type", Array)
    ], PostPhoneSipTrunk201ApplicationJson.prototype, "sipTrunks", void 0);
    return PostPhoneSipTrunk201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunk201ApplicationJson = PostPhoneSipTrunk201ApplicationJson;
var PostPhoneSipTrunkRequest = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkRequest, _super);
    function PostPhoneSipTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPhoneSipTrunkPathParams)
    ], PostPhoneSipTrunkRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPhoneSipTrunkRequests)
    ], PostPhoneSipTrunkRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPhoneSipTrunkSecurity)
    ], PostPhoneSipTrunkRequest.prototype, "security", void 0);
    return PostPhoneSipTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkRequest = PostPhoneSipTrunkRequest;
var PostPhoneSipTrunkResponse = /** @class */ (function (_super) {
    __extends(PostPhoneSipTrunkResponse, _super);
    function PostPhoneSipTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostPhoneSipTrunkResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPhoneSipTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPhoneSipTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPhoneSipTrunk201ApplicationJson)
    ], PostPhoneSipTrunkResponse.prototype, "postPhoneSIPTrunk201ApplicationJSONObject", void 0);
    return PostPhoneSipTrunkResponse;
}(utils_1.SpeakeasyBase));
exports.PostPhoneSipTrunkResponse = PostPhoneSipTrunkResponse;
