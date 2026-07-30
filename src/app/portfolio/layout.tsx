import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "معرض أعمالنا ومشاريعنا | شركة إشراق بالرياض",
  description: "شاهد معرض أعمال شركة إشراق بالرياض: مشاريع لوحات الحروف البارزة المضيئة، لوحات واجهات كلادينج، تجهيز بوثات المعارض، وتغليف سيارات الشركات وتصنيع الدروع والسيوف التذكارية.",
  keywords: ["معرض لوحات دعاية واعلان", "مشاريع حروف بارزة الرياض", "صور لوحات كلادينج الرياض", "بوثات معارض الرياض", "سيارات مغلفة الرياض"],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
