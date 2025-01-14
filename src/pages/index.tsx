import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface Cliente {
  id: string;
  nombre: string;
  direccion: string;
  comercial: string;
}

interface Pedido {
  numero: string;
  fecha: string;
  clienteId: string;
  clienteNombre: string;
  productos: ProductoPedido[];
  observaciones: string;
  fechaEntrega: string;
}

interface ProductoPedido {
  referencia: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  descuento: number;
}

export default function IndexPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const handleAddCliente = (cliente: Cliente) => {
    setClientes([...clientes, cliente]);
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <h1 className="text-2xl font-bold">Gesti\u00f3n de Pedidos</h1>

      {/* Formulario de Cliente */}
      <form>
        <FormItem>
          <FormLabel>Nombre del Cliente</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Nombre del Cliente" />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Direcci\u00f3n</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Direcci\u00f3n" />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Comercial Asignado</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Comercial Asignado" />
          </FormControl>
          <FormMessage />
        </FormItem>
        <Button onClick={() => handleAddCliente({ id: "1", nombre: "Cliente Ejemplo", direccion: "Direcci\u00f3n Ejemplo", comercial: "Comercial Ejemplo" })}>A\u00f1adir Cliente</Button>
      </form>

      {/* Tabla de Pedidos */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>N\u00famero de Pedido</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Productos</TableHead>
            <TableHead>Observaciones</TableHead>
            <TableHead>Fecha de Entrega</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Example data, replace with actual data */}
          {[]?.map((pedido: Pedido, index) => (
            <TableRow key={index}>
              <TableCell>{pedido.numero}</TableCell>
              <TableCell>{pedido.fecha}</TableCell>
              <TableCell>{pedido.clienteNombre}</TableCell>
              <TableCell>{pedido.productos.map((p: ProductoPedido) => p.descripcion).join(", ")}</TableCell>
              <TableCell>{pedido.observaciones}</TableCell>
              <TableCell>{pedido.fechaEntrega}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
