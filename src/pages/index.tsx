import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface Cliente {
  id: string;
  nombre: string;
  direccion: string;
  comercial: string;
}

interface Producto {
  referencia: string;
  descripcion: string;
  precio: number;
  foto: string;
  fichaTecnica: string;
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
  const [productos, setProductos] = useState<Producto[]>([]);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const handleAddCliente = (cliente: Cliente) => {
    setClientes([...clientes, cliente]);
  };

  const handleAddProducto = (producto: Producto) => {
    setProductos([...productos, producto]);
  };

  const handleAddPedido = (pedido: Pedido) => {
    setPedidos([...pedidos, pedido]);
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <h1 className="text-2xl font-bold">Gestión de Pedidos</h1>

      {/* Formulario de Cliente */}
      <Form>
        <FormItem>
          <FormLabel>Nombre del Cliente</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Nombre del Cliente" />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Dirección</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Dirección" />
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
        <Button onClick={() => handleAddCliente({ id: "1", nombre: "Cliente Ejemplo", direccion: "Dirección Ejemplo", comercial: "Comercial Ejemplo" })}>Añadir Cliente</Button>
      </Form>

      {/* Tabla de Pedidos */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número de Pedido</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Productos</TableHead>
            <TableHead>Observaciones</TableHead>
            <TableHead>Fecha de Entrega</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pedidos.map((pedido, index) => (
            <TableRow key={index}>
              <TableCell>{pedido.numero}</TableCell>
              <TableCell>{pedido.fecha}</TableCell>
              <TableCell>{pedido.clienteNombre}</TableCell>
              <TableCell>{pedido.productos.map(p => p.descripcion).join(", ")}</TableCell>
              <TableCell>{pedido.observaciones}</TableCell>
              <TableCell>{pedido.fechaEntrega}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
