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
exports.DashboardZoomRoomsResponse = exports.DashboardZoomRoomsRequest = exports.DashboardZoomRoomsZoomRoomList = exports.DashboardZoomRoomsZoomRoomListZoomRoom = exports.DashboardZoomRoomsSecurity = exports.DashboardZoomRoomsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardZoomRoomsQueryParams = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomsQueryParams, _super);
    function DashboardZoomRoomsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomsQueryParams.prototype, "pageSize", void 0);
    return DashboardZoomRoomsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomsQueryParams = DashboardZoomRoomsQueryParams;
var DashboardZoomRoomsSecurity = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomsSecurity, _super);
    function DashboardZoomRoomsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardZoomRoomsSecurity.prototype, "oAuth", void 0);
    return DashboardZoomRoomsSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomsSecurity = DashboardZoomRoomsSecurity;
// DashboardZoomRoomsZoomRoomListZoomRoom
/**
 * Zoom room.
**/
var DashboardZoomRoomsZoomRoomListZoomRoom = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomsZoomRoomListZoomRoom, _super);
    function DashboardZoomRoomsZoomRoomListZoomRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_type" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "accountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calender_name" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "calenderName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=camera" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "camera", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_ip" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "deviceIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "health", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issues" }),
        __metadata("design:type", Array)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "issues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_start_time" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "lastStartTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microphone" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "microphone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_name" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "roomName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaker" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "speaker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomListZoomRoom.prototype, "status", void 0);
    return DashboardZoomRoomsZoomRoomListZoomRoom;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomsZoomRoomListZoomRoom = DashboardZoomRoomsZoomRoomListZoomRoom;
// DashboardZoomRoomsZoomRoomList
/**
 * Pagination Object.
**/
var DashboardZoomRoomsZoomRoomList = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomsZoomRoomList, _super);
    function DashboardZoomRoomsZoomRoomList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomsZoomRoomList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomsZoomRoomList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomsZoomRoomList.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomsZoomRoomList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomsZoomRoomList.prototype, "totalRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_rooms", elemType: DashboardZoomRoomsZoomRoomListZoomRoom }),
        __metadata("design:type", Array)
    ], DashboardZoomRoomsZoomRoomList.prototype, "zoomRooms", void 0);
    return DashboardZoomRoomsZoomRoomList;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomsZoomRoomList = DashboardZoomRoomsZoomRoomList;
var DashboardZoomRoomsRequest = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomsRequest, _super);
    function DashboardZoomRoomsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomsQueryParams)
    ], DashboardZoomRoomsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomsSecurity)
    ], DashboardZoomRoomsRequest.prototype, "security", void 0);
    return DashboardZoomRoomsRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomsRequest = DashboardZoomRoomsRequest;
var DashboardZoomRoomsResponse = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomsResponse, _super);
    function DashboardZoomRoomsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardZoomRoomsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardZoomRoomsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardZoomRoomsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomsZoomRoomList)
    ], DashboardZoomRoomsResponse.prototype, "zoomRoomList", void 0);
    return DashboardZoomRoomsResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomsResponse = DashboardZoomRoomsResponse;
