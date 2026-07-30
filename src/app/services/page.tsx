import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "خدماتنا للدعاية والإعلان بالرياض | لوحات إعلانية وتجهيز معارض",
  description: "تعرف على تفاصيل خدمات شركة إشراق بالرياض: تصنيع لوحات الحروف البارزة المضيئة، لوحات كلادينج، تجهيز بوثات المعارض، تغليف سيارات، وتصاميم الهوية التجارية والدروع.",
  keywords: ["لوحات خارجية الرياض", "تصنيع حروف بارزة الرياض", "لوحات كلادينج واجهات", "تجهيز معارض ومؤتمرات الرياض", "ستيكرات سيارات الرياض", "هدايا دعائية ودروع تذكارية"],
};

import ServicesClient from './ServicesClient';

export default function Services() {
  return <ServicesClient />;
}
