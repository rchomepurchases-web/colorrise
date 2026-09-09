import ServiceAreaPage, { serviceAreaMetadata } from "../ServiceAreaPage";
import { serviceAreas } from "../data";

const area = serviceAreas.phoenix;
export const metadata = serviceAreaMetadata(area);
export default function Page() { return <ServiceAreaPage area={area} />; }
