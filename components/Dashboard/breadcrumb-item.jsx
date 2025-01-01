import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export function MyBreadcrumbItem({ crumb, index, total }) {
  return (
    <>
      <BreadcrumbItem>
        {index || total == 1 ? (
          <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink href={crumb.link}>{crumb.title}</BreadcrumbLink>
        )}
      </BreadcrumbItem>
      {!index && total != 1 && <BreadcrumbSeparator className="hidden md:block" />}
    </>
  );
}

//   <SidebarProvider>
//   <AppSidebar />
//   <SidebarInset>
//     <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//       <SidebarTrigger className="-ml-1" />
//       <Separator orientation="vertical" className="mr-2 h-4" />
//       <Breadcrumb>
//         <BreadcrumbList>
//           <BreadcrumbItem className="hidden md:block">
//             <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator className="hidden md:block" />
//           <BreadcrumbItem>
//             <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//           </BreadcrumbItem>
//         </BreadcrumbList>
//       </Breadcrumb>
//     </header>