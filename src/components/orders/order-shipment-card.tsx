'use client';

import { OrderShipment } from '@/libs/orders/types';
import { format } from 'date-fns';
import { FaExternalLinkAlt, FaTruck } from 'react-icons/fa';
import clsx from 'clsx';

const statusColors: Record<NonNullable<OrderShipment['status']>, string> = {
  created: 'bg-gray-200 text-gray-800',
  in_transit: 'bg-blue-100 text-blue-800',
  delivered: 'bg-green-100 text-green-800',
  failed: 'bg-red-100 text-red-800',
};

export function OrderShipmentCard({ shipment }: { shipment: OrderShipment }) {
  const {
    trackingNumber,
    courierService,
    status = 'created',
    deliveryEstimate,
    shippedAt,
    carrierTrackingUrl,
  } = shipment;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 text-lg font-semibold mb-2">
          <FaTruck />
          <span>Shipment Info</span>
        </div>
        <span className={clsx('text-xs px-2 py-1 rounded-full capitalize', statusColors[status])}>
          {status.replace('_', ' ')}
        </span>
      </div>
      <div>
        <div className="text-xs space-y-1">
          <p>
            <span className="font-semibold">Tracking:</span> {trackingNumber}
          </p>
          <p>
            <span className="font-semibold">Courier:</span> {courierService}
          </p>
          <p>
            <span className="font-semibold">Shipped:</span> {format(new Date(shippedAt), 'PPP')}
          </p>
          <p>
            <span className="font-semibold">Est. Delivery:</span>{' '}
            {format(new Date(deliveryEstimate), 'PPP')}
          </p>
        </div>

        {carrierTrackingUrl && (
          <div>
            <a
              href={carrierTrackingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:underline"
            >
              Track Shipment
              <FaExternalLinkAlt className="ml-1 h-3 w-3" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
