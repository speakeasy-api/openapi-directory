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
exports.AddRoleMembersResponse = exports.AddRoleMembersRequest = exports.AddRoleMembers201ApplicationJson = exports.AddRoleMembersSecurity = exports.AddRoleMembersRequests = exports.AddRoleMembersMultipartFormData1 = exports.AddRoleMembersMultipartFormDataMembers = exports.AddRoleMembersApplicationJson = exports.AddRoleMembersApplicationJsonMembers = exports.AddRoleMembersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddRoleMembersPathParams = /** @class */ (function (_super) {
    __extends(AddRoleMembersPathParams, _super);
    function AddRoleMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=roleId" }),
        __metadata("design:type", String)
    ], AddRoleMembersPathParams.prototype, "roleId", void 0);
    return AddRoleMembersPathParams;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersPathParams = AddRoleMembersPathParams;
var AddRoleMembersApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(AddRoleMembersApplicationJsonMembers, _super);
    function AddRoleMembersApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddRoleMembersApplicationJsonMembers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddRoleMembersApplicationJsonMembers.prototype, "id", void 0);
    return AddRoleMembersApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersApplicationJsonMembers = AddRoleMembersApplicationJsonMembers;
var AddRoleMembersApplicationJson = /** @class */ (function (_super) {
    __extends(AddRoleMembersApplicationJson, _super);
    function AddRoleMembersApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: AddRoleMembersApplicationJsonMembers }),
        __metadata("design:type", Array)
    ], AddRoleMembersApplicationJson.prototype, "members", void 0);
    return AddRoleMembersApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersApplicationJson = AddRoleMembersApplicationJson;
var AddRoleMembersMultipartFormDataMembers = /** @class */ (function (_super) {
    __extends(AddRoleMembersMultipartFormDataMembers, _super);
    function AddRoleMembersMultipartFormDataMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddRoleMembersMultipartFormDataMembers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddRoleMembersMultipartFormDataMembers.prototype, "id", void 0);
    return AddRoleMembersMultipartFormDataMembers;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersMultipartFormDataMembers = AddRoleMembersMultipartFormDataMembers;
var AddRoleMembersMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AddRoleMembersMultipartFormData1, _super);
    function AddRoleMembersMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=members;json=true", elemType: AddRoleMembersMultipartFormDataMembers }),
        __metadata("design:type", Array)
    ], AddRoleMembersMultipartFormData1.prototype, "members", void 0);
    return AddRoleMembersMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersMultipartFormData1 = AddRoleMembersMultipartFormData1;
var AddRoleMembersRequests = /** @class */ (function (_super) {
    __extends(AddRoleMembersRequests, _super);
    function AddRoleMembersRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddRoleMembersApplicationJson)
    ], AddRoleMembersRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddRoleMembersMultipartFormData1)
    ], AddRoleMembersRequests.prototype, "object1", void 0);
    return AddRoleMembersRequests;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersRequests = AddRoleMembersRequests;
var AddRoleMembersSecurity = /** @class */ (function (_super) {
    __extends(AddRoleMembersSecurity, _super);
    function AddRoleMembersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddRoleMembersSecurity.prototype, "oAuth", void 0);
    return AddRoleMembersSecurity;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersSecurity = AddRoleMembersSecurity;
var AddRoleMembers201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddRoleMembers201ApplicationJson, _super);
    function AddRoleMembers201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add_at" }),
        __metadata("design:type", Date)
    ], AddRoleMembers201ApplicationJson.prototype, "addAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids" }),
        __metadata("design:type", String)
    ], AddRoleMembers201ApplicationJson.prototype, "ids", void 0);
    return AddRoleMembers201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembers201ApplicationJson = AddRoleMembers201ApplicationJson;
var AddRoleMembersRequest = /** @class */ (function (_super) {
    __extends(AddRoleMembersRequest, _super);
    function AddRoleMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddRoleMembersPathParams)
    ], AddRoleMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddRoleMembersRequests)
    ], AddRoleMembersRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddRoleMembersSecurity)
    ], AddRoleMembersRequest.prototype, "security", void 0);
    return AddRoleMembersRequest;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersRequest = AddRoleMembersRequest;
var AddRoleMembersResponse = /** @class */ (function (_super) {
    __extends(AddRoleMembersResponse, _super);
    function AddRoleMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddRoleMembers201ApplicationJson)
    ], AddRoleMembersResponse.prototype, "addRoleMembers201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddRoleMembersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddRoleMembersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AddRoleMembersResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddRoleMembersResponse.prototype, "statusCode", void 0);
    return AddRoleMembersResponse;
}(utils_1.SpeakeasyBase));
exports.AddRoleMembersResponse = AddRoleMembersResponse;
