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
exports.UpdateAGroupMemberResponse = exports.UpdateAGroupMemberRequest = exports.UpdateAGroupMemberSecurity = exports.UpdateAGroupMemberRequests = exports.UpdateAGroupMemberMultipartFormData = exports.UpdateAGroupMemberMultipartFormDataActionEnum = exports.UpdateAGroupMemberApplicationJson = exports.UpdateAGroupMemberApplicationJsonActionEnum = exports.UpdateAGroupMemberPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateAGroupMemberPathParams = /** @class */ (function (_super) {
    __extends(UpdateAGroupMemberPathParams, _super);
    function UpdateAGroupMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], UpdateAGroupMemberPathParams.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=memberId" }),
        __metadata("design:type", String)
    ], UpdateAGroupMemberPathParams.prototype, "memberId", void 0);
    return UpdateAGroupMemberPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateAGroupMemberPathParams = UpdateAGroupMemberPathParams;
var UpdateAGroupMemberApplicationJsonActionEnum;
(function (UpdateAGroupMemberApplicationJsonActionEnum) {
    UpdateAGroupMemberApplicationJsonActionEnum["Move"] = "move";
    UpdateAGroupMemberApplicationJsonActionEnum["SetPrimary"] = "set_primary";
})(UpdateAGroupMemberApplicationJsonActionEnum = exports.UpdateAGroupMemberApplicationJsonActionEnum || (exports.UpdateAGroupMemberApplicationJsonActionEnum = {}));
var UpdateAGroupMemberApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateAGroupMemberApplicationJson, _super);
    function UpdateAGroupMemberApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateAGroupMemberApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_group_id" }),
        __metadata("design:type", String)
    ], UpdateAGroupMemberApplicationJson.prototype, "targetGroupId", void 0);
    return UpdateAGroupMemberApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateAGroupMemberApplicationJson = UpdateAGroupMemberApplicationJson;
var UpdateAGroupMemberMultipartFormDataActionEnum;
(function (UpdateAGroupMemberMultipartFormDataActionEnum) {
    UpdateAGroupMemberMultipartFormDataActionEnum["Move"] = "move";
    UpdateAGroupMemberMultipartFormDataActionEnum["SetPrimary"] = "set_primary";
})(UpdateAGroupMemberMultipartFormDataActionEnum = exports.UpdateAGroupMemberMultipartFormDataActionEnum || (exports.UpdateAGroupMemberMultipartFormDataActionEnum = {}));
var UpdateAGroupMemberMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateAGroupMemberMultipartFormData, _super);
    function UpdateAGroupMemberMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], UpdateAGroupMemberMultipartFormData.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=target_group_id" }),
        __metadata("design:type", String)
    ], UpdateAGroupMemberMultipartFormData.prototype, "targetGroupId", void 0);
    return UpdateAGroupMemberMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateAGroupMemberMultipartFormData = UpdateAGroupMemberMultipartFormData;
var UpdateAGroupMemberRequests = /** @class */ (function (_super) {
    __extends(UpdateAGroupMemberRequests, _super);
    function UpdateAGroupMemberRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAGroupMemberApplicationJson)
    ], UpdateAGroupMemberRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateAGroupMemberMultipartFormData)
    ], UpdateAGroupMemberRequests.prototype, "object1", void 0);
    return UpdateAGroupMemberRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateAGroupMemberRequests = UpdateAGroupMemberRequests;
var UpdateAGroupMemberSecurity = /** @class */ (function (_super) {
    __extends(UpdateAGroupMemberSecurity, _super);
    function UpdateAGroupMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateAGroupMemberSecurity.prototype, "oAuth", void 0);
    return UpdateAGroupMemberSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateAGroupMemberSecurity = UpdateAGroupMemberSecurity;
var UpdateAGroupMemberRequest = /** @class */ (function (_super) {
    __extends(UpdateAGroupMemberRequest, _super);
    function UpdateAGroupMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAGroupMemberPathParams)
    ], UpdateAGroupMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAGroupMemberRequests)
    ], UpdateAGroupMemberRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAGroupMemberSecurity)
    ], UpdateAGroupMemberRequest.prototype, "security", void 0);
    return UpdateAGroupMemberRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateAGroupMemberRequest = UpdateAGroupMemberRequest;
var UpdateAGroupMemberResponse = /** @class */ (function (_super) {
    __extends(UpdateAGroupMemberResponse, _super);
    function UpdateAGroupMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateAGroupMemberResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateAGroupMemberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateAGroupMemberResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAGroupMemberResponse.prototype, "updateAGroupMember204ApplicationJSONAny", void 0);
    return UpdateAGroupMemberResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateAGroupMemberResponse = UpdateAGroupMemberResponse;
