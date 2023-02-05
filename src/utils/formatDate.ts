import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

format(new Date(), "DD/mm/YYYY", {
  locale: ptBR,
});
