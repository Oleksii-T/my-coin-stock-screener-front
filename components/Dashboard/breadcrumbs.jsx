import { Breadcrumb, BreadcrumbList } from '@/components/ui/breadcrumb';
import { useBreadcrumb } from '@/context/BreadcrumbContext';
import { MyBreadcrumbItem } from '@/components/Dashboard/breadcrumb-item';

export function Breadcrumbs() {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <MyBreadcrumbItem crumb={crumb} index={index} total={breadcrumbs.length} key={index} />
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
