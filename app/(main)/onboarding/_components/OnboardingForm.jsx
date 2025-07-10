"use client";

import React, { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const OnboardingForm = ({ industries }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

const onSubmit=async(values)=>{

}
const watchIndustry=watch("industry");

  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className="gradient-title text-4xl">
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            Select your industry to get personalized recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div  className='space-y-2'>
              <Label htmlFor="industry">Industry</Label>
              <Select onValueChange={(value)=>{
                setValue("industry",value);
                setSelectedIndustry(
                  industries.find((ind)=>ind.id===value)
                );
                setValue("subIndustry","");
              }}>
                <SelectTrigger id='industry' className="w-full">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((ind)=>{
                      return <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>
                  })}
                 
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-sm text-red-500"
                >{errors.industry.message}</p>
              )}
            </div>
              
            {watchIndustry && 
             <div  className='space-y-2'>
              <Label htmlFor="industry">Sub-Industry</Label>
              <Select onValueChange={(value)=>{
                setValue("subIndustry",value)}}>
                <SelectTrigger id='subIndustry' className="w-full">
                  <SelectValue placeholder="Select an subIndustry" />
                </SelectTrigger>
                <SelectContent>
                  {selectedIndustry?.subIndustries.map((ind)=>{
                      return <SelectItem value={ind} key={ind}>{ind}</SelectItem>
                  })}
                 
                </SelectContent>
              </Select>
              {errors.subIndustry && (
                <p className="text-sm text-red-500"
                >{errors.subIndustry.message}</p>
              )}
            </div>}

            <div  className='space-y-2'>
              <Label htmlFor="industry">Years of Experience</Label>
              <Input id='experience' type="number"
              min="0"
              max="50"
              placeholder="Enter years of Experience"
              {...register("experience")}
              />
              
              
              {errors.subIndustry && (
                <p className="text-sm text-red-500"
                >{errors.subIndustry.message}</p>
              )}
            </div>


          </form>
        </CardContent>
      </Card>
    </div>

    

  );
};

export default OnboardingForm;
