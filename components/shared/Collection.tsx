import React from "react";
type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubText: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Event_Organized" | "My_Tickets" | "All_Events";
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubText,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return <div>Collection</div>;
};

export default Collection;
