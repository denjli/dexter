"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@heroui/react";

export default function SinglePokemon() {
  return (
    <Card className="py-4 flex justify-center items-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          // width={270}
        />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10 bg-red-100">
        <p className="text-tiny text-black/80">Available soon.</p>
        <Button
          className="text-tiny text-white bg-black/40"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}
