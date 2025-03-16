import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
const ProductDetail = () => {
  const {
    id
  } = useParams();
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold">Product Detail</h1>
      <Card className="p-6">
        <p className="text-muted-foreground">
          Product {id} details coming soon
        </p>
      </Card>
    </div>;
};
export default ProductDetail;