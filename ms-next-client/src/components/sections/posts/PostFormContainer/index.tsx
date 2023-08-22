"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { PostDialog } from "../PostDialog";

interface IPostFormContainerProps {
  open: boolean;
  onClose: () => void;
}

export function PostFormContainer({ open, onClose }: IPostFormContainerProps) {
  const schema = yup
    .object({
      title: yup.string().required(),
      content: yup.string().required(),
    })
    .required();

  const methods = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("data::", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PostDialog open={open} onClose={onClose} />
      </form>
    </FormProvider>
  );
}
