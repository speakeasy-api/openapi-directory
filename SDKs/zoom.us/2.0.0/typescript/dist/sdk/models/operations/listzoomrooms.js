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
exports.ListZoomRoomsResponse = exports.ListZoomRoomsRequest = exports.ListZoomRooms200ApplicationJson = exports.ListZoomRooms200ApplicationJsonRooms = exports.ListZoomRooms200ApplicationJsonRoomsStatusEnum = exports.ListZoomRoomsSecurity = exports.ListZoomRoomsQueryParams = exports.ListZoomRoomsTypeEnum = exports.ListZoomRoomsStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListZoomRoomsStatusEnum;
(function (ListZoomRoomsStatusEnum) {
    ListZoomRoomsStatusEnum["Offline"] = "Offline";
    ListZoomRoomsStatusEnum["Available"] = "Available";
    ListZoomRoomsStatusEnum["InMeeting"] = "InMeeting";
    ListZoomRoomsStatusEnum["UnderConstruction"] = "UnderConstruction";
})(ListZoomRoomsStatusEnum = exports.ListZoomRoomsStatusEnum || (exports.ListZoomRoomsStatusEnum = {}));
var ListZoomRoomsTypeEnum;
(function (ListZoomRoomsTypeEnum) {
    ListZoomRoomsTypeEnum["ZoomRoom"] = "ZoomRoom";
    ListZoomRoomsTypeEnum["SchedulingDisplayOnly"] = "SchedulingDisplayOnly";
    ListZoomRoomsTypeEnum["DigitalSignageOnly"] = "DigitalSignageOnly";
})(ListZoomRoomsTypeEnum = exports.ListZoomRoomsTypeEnum || (exports.ListZoomRoomsTypeEnum = {}));
var ListZoomRoomsQueryParams = /** @class */ (function (_super) {
    __extends(ListZoomRoomsQueryParams, _super);
    function ListZoomRoomsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=location_id" }),
        __metadata("design:type", String)
    ], ListZoomRoomsQueryParams.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListZoomRoomsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListZoomRoomsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ListZoomRoomsQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ListZoomRoomsQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unassigned_rooms" }),
        __metadata("design:type", Boolean)
    ], ListZoomRoomsQueryParams.prototype, "unassignedRooms", void 0);
    return ListZoomRoomsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListZoomRoomsQueryParams = ListZoomRoomsQueryParams;
var ListZoomRoomsSecurity = /** @class */ (function (_super) {
    __extends(ListZoomRoomsSecurity, _super);
    function ListZoomRoomsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListZoomRoomsSecurity.prototype, "oAuth", void 0);
    return ListZoomRoomsSecurity;
}(utils_1.SpeakeasyBase));
exports.ListZoomRoomsSecurity = ListZoomRoomsSecurity;
var ListZoomRooms200ApplicationJsonRoomsStatusEnum;
(function (ListZoomRooms200ApplicationJsonRoomsStatusEnum) {
    ListZoomRooms200ApplicationJsonRoomsStatusEnum["Offline"] = "Offline";
    ListZoomRooms200ApplicationJsonRoomsStatusEnum["Available"] = "Available";
    ListZoomRooms200ApplicationJsonRoomsStatusEnum["InMeeting"] = "InMeeting";
    ListZoomRooms200ApplicationJsonRoomsStatusEnum["UnderConstruction"] = "UnderConstruction";
})(ListZoomRooms200ApplicationJsonRoomsStatusEnum = exports.ListZoomRooms200ApplicationJsonRoomsStatusEnum || (exports.ListZoomRooms200ApplicationJsonRoomsStatusEnum = {}));
var ListZoomRooms200ApplicationJsonRooms = /** @class */ (function (_super) {
    __extends(ListZoomRooms200ApplicationJsonRooms, _super);
    function ListZoomRooms200ApplicationJsonRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activation_code" }),
        __metadata("design:type", String)
    ], ListZoomRooms200ApplicationJsonRooms.prototype, "activationCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListZoomRooms200ApplicationJsonRooms.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], ListZoomRooms200ApplicationJsonRooms.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListZoomRooms200ApplicationJsonRooms.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_id" }),
        __metadata("design:type", String)
    ], ListZoomRooms200ApplicationJsonRooms.prototype, "roomId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListZoomRooms200ApplicationJsonRooms.prototype, "status", void 0);
    return ListZoomRooms200ApplicationJsonRooms;
}(utils_1.SpeakeasyBase));
exports.ListZoomRooms200ApplicationJsonRooms = ListZoomRooms200ApplicationJsonRooms;
var ListZoomRooms200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListZoomRooms200ApplicationJson, _super);
    function ListZoomRooms200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListZoomRooms200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListZoomRooms200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rooms", elemType: ListZoomRooms200ApplicationJsonRooms }),
        __metadata("design:type", Array)
    ], ListZoomRooms200ApplicationJson.prototype, "rooms", void 0);
    return ListZoomRooms200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListZoomRooms200ApplicationJson = ListZoomRooms200ApplicationJson;
var ListZoomRoomsRequest = /** @class */ (function (_super) {
    __extends(ListZoomRoomsRequest, _super);
    function ListZoomRoomsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZoomRoomsQueryParams)
    ], ListZoomRoomsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZoomRoomsSecurity)
    ], ListZoomRoomsRequest.prototype, "security", void 0);
    return ListZoomRoomsRequest;
}(utils_1.SpeakeasyBase));
exports.ListZoomRoomsRequest = ListZoomRoomsRequest;
var ListZoomRoomsResponse = /** @class */ (function (_super) {
    __extends(ListZoomRoomsResponse, _super);
    function ListZoomRoomsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListZoomRoomsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListZoomRoomsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListZoomRoomsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZoomRooms200ApplicationJson)
    ], ListZoomRoomsResponse.prototype, "listZoomRooms200ApplicationJSONObject", void 0);
    return ListZoomRoomsResponse;
}(utils_1.SpeakeasyBase));
exports.ListZoomRoomsResponse = ListZoomRoomsResponse;
