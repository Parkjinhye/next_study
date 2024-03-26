import SideNav from '@/app/ui/dashboard/sidenav';

// This child can either be a page or another layout
//여기서 받는 children이 같은 경로에 있는 page.tsx의 내용
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
