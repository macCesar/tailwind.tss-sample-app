# tailwind tss

Tailwindcss styles applied in a Titanium App.

The app.tss file was created with [this converter](https://github.com/macCesar/tailwind-tss-color-generator).

I have also included all of [FontAwesome's](https://fontawesome.com) icon definitions in order to use them in Buttons and/or Labels.

## Examples
### 'Customer Support' example
```xml
<Alloy>
    <ScrollView>
        <View class="w-screen mx-4 bg-white rounded-lg border-gray-400 shadow-lg vertical">
            <ImageView class="mt-3 h-16 w-16 rounded-16 mx-auto" image="https://randomuser.me/api/portraits/women/17.jpg" />

            <View class="mt-3 mb-3 vertical">
                <Label class="text-xl text-gray-800">Erin Lindford</Label>
                <Label class="text-base text-purple-500">Customer Support</Label>
                <Label class="text-base text-gray-600">erinlindford@example.com</Label>
                <Label class="text-base text-gray-600">(555) 765-4321</Label>
            </View>
        </View>
    </ScrollView>
</Alloy>
```

![iOS Screen - Customer Support](app/assets/images/customer-support-3.png "iOS Screen - Customer Support")

### 'Card' Example
```xml
<Alloy>
    <ScrollView>
        <View class="w-11/12 bg-white rounded-lg border-gray-400 vertical clip-enabled">
            <ImageView class="shadow-md" image="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=3300&#x26;q=80" />

            <View class="m-3 text-gray-600 h-auto vertical">
                <View class="w-screen horizontal">
                    <Label class="text-gray-600 text-2xl font-thin">Card Content</Label>
                    <Label class="ml-2 text-sm text-gray-500 font-semibold">Nov 3rd, 2019</Label>
                </View>

                <Label class="text-gray-500 font-normal w-screen">This is some card content to demonstrate how the cards work.</Label>

                <Button class="mt-2 w-1/2 h-8 rounded-8 bg-gray-500 text-white">Read More</Button>
            </View>
        </View>
    </ScrollView>
</Alloy>
```

![iOS Screen - Card Content](app/assets/images/card-content-3.png "iOS Screen - Card Content")

### 'Nike' Example
```xml
<Alloy>
    <ScrollView>
        <View class="shadow-lg mx-10">
            <View class="vertical bg-white rounded-lg border-gray-400 clip-enabled">
                <View class="vertical mx-4 my-2 ">
                    <Label class="w-full text-gray-900 font-bold text-3xl">NIKE AIR</Label>
                    <Label class="w-full text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</Label>
                </View>

                <ImageView class="h-auto w-full mt-2" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80" alt="NIKE AIR"/>

                <View class="bg-gray-900 w-screen">
                    <View class="mx-2 my-2 w-screen">
                        <Label class="ml-0 text-gray-200 font-bold text-xl">$129</Label>
                        <Button class="mr-0 w-24 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to cart</Button>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
</Alloy>

```

![iOS Screen - Nike](app/assets/images/nike-3.png "iOS Screen - Nike")

### 'Politico' Example
```xml
<Alloy>
    <ScrollView>
        <View class="vertical mx-4">
            <View class="mt-4">
                <Label class="w-screen text-sm text-red-600 font-bold">CORONAVIRUS</Label>
            </View>

            <Label class="w-full text-gray-800 text-4xl font-bold">Kemp and Bottoms hurl insults at each other in Georgia mask feud</Label>

            <Label class="w-full text-gray-500 mt-2">The war of words comes after the governor sued the Atlanta mayor over her city’s mask mandate.</Label>

            <ImageView class="mt-2" image="https://static.politico.com/dims4/default/fcd6d6a/2147483647/resize/1920x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F22%2F87%2F2259ffd444678054896b9fa32b4d%2Fgettyimages-1221513169.jpg" />

            <Label class="w-screen text-gray-600 text-normal border-b h-auto my-2 text-sm">Georgia Gov. Brian Kemp speaks to the media during a press conference. | Kevin C. Cox/Getty Images</Label>

            <TextArea class="font-thin text-xs italic w-screen text-gray-600 -mx-1">By Quint Forgey
07/17/2020 09:57 AM EDT
Updated: 07/17/2020 10:33 AM EDT</TextArea>

            <TextArea class="w-screen mx-auto h-auto mb-4 font-thin -mx-1 text-sm text-gray-600">Georgia Gov. Brian Kemp and Atlanta Mayor Keisha Lance Bottoms hurled insults at one another Friday, as their legal battle over whether to mandate masks in the state’s capital city entered its second day.

During dueling appearances at a Capitol news briefing and in an interview with CNN, the Republican governor and the Democratic mayor both accused the other’s office of playing politics amid a pandemic that continues to ravage communities across Georgia.

Updating members of the media on the state’s coronavirus response, Kemp defended his decision to sue Atlanta’s mayor and city council in an effort to block local officials there from enforcing an order requiring residents to wear a mask in public.

“Mayor Bottoms’ mask mandate cannot be enforced, but her decision to shutter businesses and undermine economic growth is devastating,” Kemp told reporters in Atlanta, likening his administration’s legal action to “sending in the National Guard.”

“I refuse to sit back and watch as disastrous policies threaten the lives and livelihoods of our citizens,” he said. “We will fight to stop reckless actions and put people over pandemic politics.”

Meanwhile, on CNN, Bottoms dismissed Kemp’s unfolding criticism as “propaganda” and “completely inaccurate,” and called the escalating controversy over face coverings “very bizarre, quite frankly.”

Bottoms also charged that the governor’s lawsuit was politically motivated, remarking that she did not “think it was happenstance” that Kemp pursued litigation one day after President Donald Trump visited Atlanta.

Furthermore, Bottoms alleged the lawsuit represented an act of “personal retaliation.” She noted that other Georgia cities had imposed similar mask orders, and said the governor “sued us personally. He did not sue the city of Atlanta. He filed suit against mtself and our city council personally.”

The high-profile clash between two of Georgia’s top leaders came after Kemp issued a statewide order Wednesday banning local mask mandates. But Bottoms said her city’s order requiring face coverings would continue to apply, provoking Kemp to file his lawsuit in state court Thursday.

The feud has served to further elevate the national profile of Bottoms, who revealed this month that she had tested positive for Covid-19 and has attained greater public prominence due to reports that she is being vetted for the role of running mate to presumptive Democratic presidential nominee Joe Biden.

As for Kemp, the rift with Bottoms has dredged up earlier criticisms of his management of Georgia’s coronavirus outbreak.

The governor lifted his stay-at-home order at the end of April after memorably admitting earlier in the month that he had just learned asymptomatic infected people could spread the disease, and state officials were caught misrepresenting Covid-19 reporting data in May.

Kemp’s latest opposition to Bottoms’ order, at a time when even the Trump administration is encouraging deference to local coronavirus directives, has drawn significant criticism. It also Viewerges from the approaches of Republican governors in Southern states including Alabama, Arkansas and Texas, who have issued statewide mask mandates in recent days.

Kemp’s own lieutenant governor, Republican Geoff Duncan, appeared reluctant to offer a full-throated defense of the governor’s lawsuit Friday, instead repeatedly emphasizing the importance of mask-wearing.

“I hope we move past it,” Duncan told CNN of the ongoing controversy, adding that the “whole conversation around the mandate doesn’t help us get through this. It becomes a distraction [from] the health and well-being of 11 million Georgians.”

Although elected officials averse to mask mandates argue Americans should be able to make their own assessments regarding their safety, public health experts have warned that Covid-19 remains a highly contagious disease — and that those not wearing masks risk infecting other, potentially more vulnerable, people.
            </TextArea>
        </View>
    </ScrollView>
</Alloy>
```

![iOS Screen - Politico](app/assets/images/politico-3.png "iOS Screen - Politico")

### 'House' Example
```xml
<Alloy>
    <ScrollView>
        <View class="w-11/12 bg-white rounded-lg border-gray-400 vertical clip-enabled">
            <ImageView class="w-screen" image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3067&amp;q=80" />

            <View class="m-4 w-screen vertical">
                <Label class="ml-0 text-sm font-bold text-gray-700">Detached house • 5y old</Label>
                <Label class="ml-0 text-3xl text-gray-900">$750,000</Label>
                <Label class="ml-0 text-gray-700">742 Evergreen Terrace</Label>
            </View>

            <View class="h-px w-screen bg-gray-300"></View>
            <View class="horizontal">
                <View class="w-auto h-20 horizontal mr-2">
                    <Label class="h-20 fa fa-bed text-gray-800" />
                    <Label class="h-20 ml-1 text-gray-800 font-bold ">3 Bedrooms</Label>
                </View>

                <View class="w-auto h-20 horizontal ml-2">
                    <Label class="h-20 fa fa-bath text-gray-800" />
                    <Label class="h-20 ml-1 text-gray-800 font-bold">2 Bathrooms</Label>
                </View>
            </View>

            <View class="h-px w-screen bg-gray-300"></View>
            <View class="bg-gray-100 vertical w-screen">
                <Label class="mx-4 mt-3 text-xs font-bold text-gray-600">REALTOR</Label>

                <View class="m-4 horizontal">
                    <ImageView class="w-10 h-10 rounded-10" image="https://randomuser.me/api/portraits/women/17.jpg" />

                    <View class="vertical w-screen">
                        <Label class="ml-3 font-bold text-gray-900">Catherine Heffner</Label>
                        <Label class="ml-3 text-sm text-gray-700">(111) 111-1111</Label>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
</Alloy>
```

![iOS Screen - Detached House](app/assets/images/detached-house-3.png "iOS Screen - Detached House")

### 'Projects' Example
```xml
<Alloy>
    <ScrollView>
        <View class="w-screen mx-4 bg-white border-gray-500 rounded-lg vertical clip-enabled">
            <View class="w-screen bg-gray-500">
                <Label class="h-auto mx-3 my-2 text-xl text-white font-semibold">PROJECTS</Label>
            </View>

            <View class="w-screen h-px bg-gray-500"></View>
            <View class="w-screen m-4 horizontal">
                <View class="w-1/5 mt-0">
                    <Button class="w-12 h-12 ml-0 text-2xl text-white bg-indigo-500 rounded-12 fa fa-code"></Button>
                </View>

                <View class="w-4/5 vertical">
                    <Label class="w-screen text-sm text-gray-500">Engineering</Label>
                    <Label class="w-screen mt-1 text-base font-semibold text-gray-900">GraphQL API</Label>
                    <TextArea class="w-screen -ml-1 -mr-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a excepturi et minus ipsum hic, porro voluptatem totam nulla suscipit!</TextArea>

                    <View class="w-screen horizontal">
                        <View class="w-1/3 h-6 horizontal">
                            <Button class="w-6 text-gray-500 far fa-user"/>
                            <Label class="ml-1 text-sm font-bold text-gray-700">4</Label>
                        </View>

                        <View class="w-1/3 h-6 horizontal">
                            <Button class="w-6 text-gray-500 far fa-comment-alt"/>
                            <Label class="ml-1 text-sm font-bold text-gray-700">12</Label>
                        </View>

                        <View class="w-1/3 h-6 horizontal">
                            <Button class="w-6 text-gray-500 fa fa-align-left"/>
                            <Label class="ml-1 text-sm font-bold text-gray-700">20</Label>
                        </View>
                    </View>
                </View>
            </View>

            <View class="w-screen h-px bg-gray-500"></View>
            <View class="w-screen m-4 horizontal">
                <View class="w-1/5 mt-0">
                    <Button class="w-12 h-12 ml-0 text-2xl text-white bg-green-500 rounded-12 fa fa-suitcase"></Button>
                </View>

                <View class="w-4/5 vertical">
                    <Label class="w-screen text-sm text-gray-500">Human Resources</Label>
                    <Label class="w-screen mt-1 text-base font-semibold text-gray-900">Profit sharing program</Label>
                    <TextArea class="w-screen -ml-1 -mr-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a excepturi et minus ipsum hic, porro voluptatem totam nulla suscipit!</TextArea>

                    <View class="w-screen horizontal">
                        <View class="w-1/3 h-6 horizontal">
                            <Button class="w-6 text-gray-500 far fa-user"/>
                            <Label class="ml-1 text-sm font-bold text-gray-700">6</Label>
                        </View>

                        <View class="w-1/3 h-6 horizontal">
                            <Button class="w-6 text-gray-500 far fa-comment-alt"/>
                            <Label class="ml-1 text-sm font-bold text-gray-700">5</Label>
                        </View>

                        <View class="w-1/3 h-6 horizontal">
                            <Button class="w-6 text-gray-500 fa fa-align-left"/>
                            <Label class="ml-1 text-sm font-bold text-gray-700">30</Label>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
</Alloy>
```

![iOS Screen - Projects](app/assets/images/projects-3.png "iOS Screen - Projects")

### 'Private Villa' Example
```xml
<Alloy>
    <ScrollView>
        <View class="w-screen mx-4 bg-white vertical">
            <View class="vertical">
                <ImageView class="rounded-lg w-screen" image="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=512&#x26;q=80" />

                <View class="w-screen mt-2 vertical">
                    <Label class="ml-0 text-xs text-gray-600 font-bold">PRIVATE VILLA</Label>
                    <Label class="ml-0 font-bold text-gray-700 text-base">Relaxing All-Inclusive Resort in Cancun</Label>
                    <Label class="ml-0 text-sm text-gray-600">$299 USD per night</Label>
                </View>
            </View>
        </View>
    </ScrollView>
</Alloy>
```

![iOS Screen - Private Villa](app/assets/images/private-villa-3.png "iOS Screen - Private Villa")

### 'Login Form' Example
```xml
<Alloy>
    <ScrollView>
        <View class="vertical mx-8">
            <ImageView class="mt-3 w-56" image="/images/welcome.png" />

            <Label class="w-full ml-1 mt-2 text-sm text-left text-gray-900">Your Login</Label>
            <TextField class="w-screen h-10 mt-1 pl-2 text-base text-gray-800 bg-gray-50 border-gray-400 rounded-md" returnKeyType="Ti.UI.RETURNKEY_NEXT" keyboardType="Ti.UI.KEYBOARD_TYPE_EMAIL" hintText="Email" />

            <Label class="w-full ml-1 mt-4 text-sm text-left text-gray-900">Your Password</Label>
            <TextField class="w-screen h-10 mt-1 pl-2 text-base text-gray-800 bg-gray-50 border-gray-400 rounded-md" returnKeyType="Ti.UI.RETURNKEY_NEXT" hintText="Password" passwordMask="true" />

            <Button class="w-screen h-10 mt-4 text-base text-white bg-gray-800 rounded-md">Login</Button>

            <View class="horizontal w-screen mt-2">
                <View class="horizontal w-1/2 mx-0" onClick="changeActive">
                    <Button class="w-6 far fa-check-square fa-square text-gray-800" id="rememberMe" active='false' />
                    <Button class="ml-0 text-sm text-gray-800">Remember me</Button>
                </View>

                <View class="horizontal w-1/2 mx-0">
                    <Button class="w-screen text-sm text-right text-gray-800">Forgot password?</Button>
                </View>
            </View>

            <View class="vertical w-screen h-auto mt-2 mb-8 bg-gray-100 rounded-md">
                <Label class="h-auto ml-3 mr-3 mt-2 text-xs text-center text-gray-600">By creating an account you agree to our</Label>

                <Button class="h-auto ml-3 mr-3 mb-1 text-xs text-center text-gray-800 font-semibold">Terms and Conditions</Button>
            </View>
        </View>
    </ScrollView>
</Alloy>
```

![iOS Screen - Login Form](app/assets/images/login-form-3.png "iOS Screen - Login Form")
