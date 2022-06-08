import * as RequestMiddleware from './request_middleware';
import * as RouteMiddleware from './route_middleware';

export const JWT = [
    RequestMiddleware.checkAuthHeader, 
    RequestMiddleware.checkToken, 
    RequestMiddleware.verifyAndAuthenticate
];

export const NONJWT = [
    RequestMiddleware.checkPayloadHeader,
    RequestMiddleware.checkJSONPayload
];

export const create_event = [
    RouteMiddleware.checkUserExistence,
    RouteMiddleware.checkUserBalance,
    RouteMiddleware.checkPayload,
    RouteMiddleware.checkDatetimes
];

export const show_events = [
    RouteMiddleware.checkUserExistence
];

export const delete_event = [
    RouteMiddleware.checkEventExistence,
    RouteMiddleware.checkEventOwner,
    RouteMiddleware.checkEventBookings
];

export const close_event = [
    RouteMiddleware.checkEventExistence,
    RouteMiddleware.checkEventOwner
];

export const show_bookings = [
    RouteMiddleware.checkEventExistence,
    RouteMiddleware.checkLimit,
    RouteMiddleware.checkModality
];

export const book = [
    RouteMiddleware.checkEventExistence,
    RouteMiddleware.checkEventStatus,
    RouteMiddleware.checkDatetimes,
    RouteMiddleware.checkDatetimesExistence,
    RouteMiddleware.checkBookingExistence,
    RouteMiddleware.checkBookingSecondModality,
    RouteMiddleware.checkBookingThirdModality
];

export const refill = [
    RouteMiddleware.checkAdmin,
    RouteMiddleware.checkUserExistence,
    RouteMiddleware.checkRefill
];

export const any_other = [
    RequestMiddleware.notFound
]

export const error_handling =[
    RequestMiddleware.logErrors,
    RequestMiddleware.errorHandler
];
