import ServiceAreaPage, { serviceAreaMetadata } from "../ServiceAreaPage";
import { serviceAreas } from "../data";
export const metadata = serviceAreaMetadata(serviceAreas.queenCreek);
export default function Page() { return <ServiceAreaPage area={serviceAreas.queenCreek} />; }
