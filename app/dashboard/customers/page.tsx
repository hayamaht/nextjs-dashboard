import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return (
    <Table customers={customers} />
  )
}
